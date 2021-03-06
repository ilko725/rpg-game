import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';
// import sprites from '../configs/sprites';
// import levelCfg from '../configs/world.json';
// import gameObjects from '../configs/gameObjects.json';
import ClientApi from './ClientApi';

class ClientGame {
  constructor(cfg) {
    this.cfg = cfg;
    this.gameObjects = cfg.gameObjects;
    this.player = null;
    this.players = {};
    this.api = new ClientApi({
      game: this,
      ...cfg.apiCfg,
    });
    this.spawnPoint = [];
    this.api.connect();
    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
    // console.log(this.player);
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId), this);
  }

  createWorld() {
    return new ClientWorld(this, this.engine, this.cfg.world);
  }

  getWorld() {
    return this.map;
  }

  initEngine() {
    this.engine.loadSprites(this.cfg.sprites).then(() => {
      this.map.init();
      this.engine.on('render', (_, time) => {
        if (this.player) {
          this.engine.camera.focusAtGameObject(this.player);
        }
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
      this.engine.focus();
      this.api.join(this.cfg.playerName);
    });
  }

  setPlayers(playersList) {
    playersList.forEach((player) => this.createPlayer(player));
  }

  createCurrentPlayer(playerCfg) {
    const playerObj = this.createPlayer(playerCfg);

    this.setPlayer(playerObj);
  }

  createPlayer({
    id, col, row, layer, skin, name,
  }) {
    if (!this.players[id]) {
      const cell = this.map.cellAt(col, row);
      const playerObj = cell.createGameObject(
        {
          class: 'player',
          type: skin,
          playerId: id,
          playerName: name,
        },
        layer,
      );

      cell.addGameObject(playerObj);

      this.players[id] = playerObj;
    }

    return this.players[id];
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('left');
        }
      },
      ArrowRight: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('right');
        }
      },
      ArrowUp: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('up');
        }
      },
      ArrowDown: (keydown) => {
        if (keydown) {
          this.movePlayerToDir('down');
        }
      },
    });
  }

  movePlayerToDir(dir) {
    this.api.move(dir);
    const dirs = {
      left: [-1, 0],
      right: [1, 0],
      up: [0, -1],
      down: [0, 1],
    };

    const { player } = this;

    if (player && player.motionProgress === 1) {
      const canMove = player.moveByCellCoord(
        dirs[dir][0],
        dirs[dir][1],
        (cell) => cell.findObjectsByType('grass').length,
      );

      if (canMove) {
        player.setState(dir);
        player.once('motion-stopped', () => player.setState('main'));
      }
    }
  }

  getPlayerById(id) {
    return this.players[id];
  }

  addSpawnPoint(spawnPoint) {
    this.spawnPoint.push(spawnPoint);
  }

  removePlayerById(id) {
    const player = this.getPlayerById(id);

    if (player) {
      player.detouch();
      delete this.players[id];
    }
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
      // console.log('Game INIT');
    }
  }
}

export default ClientGame;

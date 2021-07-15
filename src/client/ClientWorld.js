import PositionedObject from '../common/PositionedObject';
import ClientCell from './ClientCell';

class ClientWorld extends PositionedObject {
  constructor(game, engine, levelCfg) {
    // Object.assign(this, {
    //     game,
    //     engine,
    //     levelCfg,
    //     height: levelCfg.map.length,
    //     width: levelCfg.map[0].length,
    // });
    super();

    const worldHeight = levelCfg.map.length;
    const worldWidth = levelCfg.map[0].length;
    const cellSize = engine.canvas.height / levelCfg.camera.height;

    this.game = game;
    this.engine = engine;
    this.levelCfg = levelCfg;
    this.height = worldHeight * cellSize;
    this.width = worldWidth * cellSize;
    this.worldHeight = worldHeight;
    this.worldWidth = worldHeight;
    this.cellWidth = cellSize;
    this.cellHeight = cellSize;
    this.map = [];
  }

  // init() {
  //     this.engine.renderSpriteFrame({
  //         sprite: ['terrain', 'grass'],
  //         frame: 0,
  //         x: 0,
  //         y: 0,
  //         w: 48,
  //         h: 48,
  //     });
  // }

  init() {
    // const { map } = this.levelCfg;
    // map.forEach((cfgRow, y) => {
    //     cfgRow.forEach((cfgCell, x) => {
    //         this.engine.renderSpriteFrame({
    //             sprite: ['terrain', cfgCell[0]],
    //             frame: 0,
    //             x: x * 48,
    //             y: y * 48,
    //             w: 48,
    //             h: 48,
    //         });
    //     });
    // });

    const {
      levelCfg, map, worldWidth, worldHeight,
    } = this;

    for (let row = 0; row < worldHeight; row += 1) {
      for (let col = 0; col < worldWidth; col += 1) {
        if (!map[row]) {
          map[row] = [];
        }

        map[row][col] = new ClientCell({
          world: this,
          cellCol: col,
          cellRow: row,
          cellCfg: levelCfg.map[row][col],
        });
      }
    }
  }

  render(time) {
    const { map, worldWidth, worldHeight } = this;

    for (let row = 0; row < worldHeight; row += 1) {
      for (let col = 0; col < worldWidth; col += 1) {
        map[row][col].render(time);
      }
    }
  }

  cellAt(col, row) {
    return this.map[row] && this.map[row][col];
  }
}

export default ClientWorld;

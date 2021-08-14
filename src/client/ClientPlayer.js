import ClientGameObject from './ClientGameObject';

class ClientPlayer extends ClientGameObject {
  constructor(cfg) {
    super(cfg);
    // console.log(playerNameInput());
    console.log('##### Player Name', this.playerName);
    this.playerName = cfg.playerName;
    console.log('CL FROM CLIENTPLAYER', this.playerName);

    const { world } = cfg.cell;

    world.game.setPlayer(this);
  }

  render(time) {
    super.render(time);

    const { world } = this;

    world.engine.renderSign({
      x: this.x + world.cellWidth / 2,
      y: this.y - 15,
      minWidth: world.cellWidth,
      maxWidth: world.cellWidth * 1.5,
      text: this.playerName,
    });
  }
}

export default ClientPlayer;

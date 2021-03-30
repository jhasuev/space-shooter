import Phaser from "../phaser"
import config from "../config"
import Player from "../prefabs/Player"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  create() {
    this.createBackground()
    this.createPlayer()
  }

  createBackground() {
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createPlayer() {
    this.player = new Player(this)
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    this.bg.tilePositionY -= .5
  }
}
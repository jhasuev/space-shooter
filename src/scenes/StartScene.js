import Phaser from "../phaser"
import config from "../config"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Start")
  }

  create() {
    this.createBackground()
    this.createText()
    this.addEvents()
  }

  createBackground() {
    this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createText() {
    this.add.text(config.width / 2, config.height / 2, "Tap to start", config.textStyles).setOrigin(.5)
  }

  addEvents() {
    this.input.on("pointerdown", this.onTapDown, this)
  }

  onTapDown() {
    this.scene.start("Game")
  }
}
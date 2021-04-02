import Phaser from "../phaser"
import config from "../config"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Boot")
  }

  preload() {
    this.load.image("bg", "./assets/img/background.png")
  }

  create() {
    this.scene.start("Preload")
  }
}
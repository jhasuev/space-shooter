import Phaser from "../phaser"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.load.image("bg", "./assets/img/background.png")
    this.load.atlas("npc", "./assets/img/npc.png", "./assets/img/npc.json")
  }

  create() {
    this.scene.start("Game")
  }
}
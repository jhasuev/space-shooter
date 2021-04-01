import Phaser from "../phaser"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Preload")
  }

  preload() {
    this.load.image("bg", "./assets/img/background.png")
    this.load.atlas("npc", "./assets/img/npc.png", "./assets/img/npc.json")
    this.load.atlas("boom", "./assets/img/boom.png", "./assets/img/boom.json")
    this.load.image("fire", "./assets/img/laser.png")
  }

  create() {
    this.scene.start("Start")
  }
}
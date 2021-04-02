export default class BootScene extends Phaser.Scene {
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
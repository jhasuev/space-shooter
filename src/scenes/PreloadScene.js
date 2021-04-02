import Phaser from "../phaser"
import config from "../config"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Preload")
    this.style = {
      bgColor: 0xffffff,
      x: config.width / 2 - 450,
      y: config.height / 2 + 250,
      width: 400,
      height: 25
    }
  }

  init() {
    this.showProgressBox()
    this.addEvents()
  }

  showProgressBox(progress) {
    this.createBackground()
    
    const graphics = this.add.graphics()
    const x = config.width / 2 - this.style.width / 2
    const y = config.height - this.style.height * 2

    graphics.fillStyle(this.style.bgColor, .1)
    graphics.fillRect(x, y, this.style.width, this.style.height)
    
    graphics.fillStyle(this.style.bgColor)
    graphics.fillRect(x, y, this.style.width * progress, this.style.height)

    graphics.setDepth(1)
  }

  addEvents() {
    this.load.on("progress", this.showProgressBox, this)
  }

  preload() {
    this.load.atlas("npc", "./assets/img/npc.png", "./assets/img/npc.json")
    this.load.atlas("boom", "./assets/img/boom.png", "./assets/img/boom.json")
    this.load.image("fire", "./assets/img/laser.png")

    this.load.audio("theme", "./assets/sounds/theme.mp3")
    this.load.audio("boom", "./assets/sounds/boom.mp3")
  }

  create() {
    this.createBackground()

    setTimeout(() => {
      this.scene.start("Start")
    }, 1000);
  }

  createBackground() {
    this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }
}
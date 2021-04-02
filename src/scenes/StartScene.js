import config from "../config"

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("Start")
  }

  create(data) {
    this.createBackground()
    
    if (data.score !== undefined) {
      this.createStats(data)
    }
    
    this.createText()
    this.addEvents()
  }

  createBackground() {
    this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createStats(data) {
    const graphics = this.add.graphics()
          graphics.fillStyle(0x000000, .1)
          graphics.fillRect(config.width / 2 - 150, config.height / 2 - 150, 300, 300)

    const textScore = `Scores: ${data.score}`

    this.add.text(config.width / 2, 300, textScore, config.textStyles).setOrigin(.5)
  }

  createText() {
    this.add.text(config.width / 2, 420, "Tap to start", config.textStyles).setOrigin(.5)
  }

  addEvents() {
    this.input.on("pointerdown", this.onTapDown, this)
  }

  onTapDown() {
    this.scene.start("Game")
  }
}
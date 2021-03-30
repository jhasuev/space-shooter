import Phaser from "../phaser"
import config from "../config"

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, config.width / 2, config.height / 1.25, "npc", "player")
    this.init()
    this.scene = scene
  }

  init() {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = 250

    this.scene.events.on("update", this.update, this)
  }

  update() {
    this.move()
  }

  move() {
    this.body.setVelocity(0)

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity)
    }

    if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity)
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity)
    }

    if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity)
    }
  }
}
import Phaser from "../phaser"
import config from "../config"

export default class MovableObject extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame)
    this.init(data)
  }

  init(data) {
    this.scene.add.existing(this)
    this.scene.physics.add.existing(this)
    this.body.enable = true
    this.velocity = data.velocity

    this.scene.events.on("update", this.update, this)
  }

  setAlive(state) {
    this.body.enable = state
    this.setVisible(state)
    this.setActive(state)
  }

  isDead() {
    return false
  }

  update() {
    if (this.active && this.isDead()) {
      this.setAlive(false)
    }
  }

  restart(x, y) {
    this.x = x
    this.y = y
    this.setAlive(true)
  }

  move() {
    this.body.setVelocityY(this.velocity)
  }
}
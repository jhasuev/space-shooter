import Npc from "./Npc"
import config from "../config"

export default class Player extends Npc {
  constructor(scene) {
    super({
      scene,
      x: config.width / 2,
      y: config.height / 1.25,
      texture: "npc",
      frame: "player",
    })
  }

  init() {
    super.init()
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
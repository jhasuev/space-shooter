import MovableObject from "./MovableObject"
import Fires from "./Fires"
import config from "../config"

export default class Player extends MovableObject {
  constructor(scene) {
    super({
      scene,
      ...Player.generatedData(),
    })
  }

  static generatedData() {
    return {
      x: config.width / 2,
      y: config.height / 1.25,
      texture: "npc",
      frame: "player",
      velocity: 350,
    }
  }

  init() {
    super.init(Player.generatedData())
    this.fires = new Fires(this.scene)
  }

  update() {
    if (this.active) {
      this.move()
      this.fire()
    }
  }

  fire() {
    if (Phaser.Input.Keyboard.JustDown(this.scene.spaceKey)) {
      this.fires.createFire(this)
    }
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

    this.x = Math.min(Math.max(this.x, 0), config.width)
    this.y = Math.min(Math.max(this.y, 0), config.height)
  }
}
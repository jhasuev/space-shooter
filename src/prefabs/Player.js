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
      y: config.height / 1.125,
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
    }
  }

  fire() {
    this.fires.createFire(this)
  }

  move() {
    if (!this.moveStarted) {
      this.body.setVelocityX(this.velocity)
      this.moveStarted = true
    }

    if (this.x < 0) {
      this.x = 0
      this.body.setVelocityX(+this.velocity)
    } else if(this.x > config.width) {
      this.x = config.width
      this.body.setVelocityX(-this.velocity)
    }
  }
}
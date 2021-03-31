import Npc from "./Npc"
import config from "../config"

export default class Enemy extends Npc {
  constructor({ scene, x, y, texture, frame }) {
    super({ scene, x, y, texture, frame })
  }

  init() {
    super.init()
  }

  static generateData() {
    return {
      x: Phaser.Math.Between(50, config.width - 50),
      y: -50,
      texture: "npc",
      frame: "enemy" + Phaser.Math.Between(1, 3),
    }
  }
  
  static generate(scene) {
    return new this({
      ...this.generateData(scene),
      scene,
    })
  }

  isDead() {
    return this.y > config.height + this.height
  }

  restart() {
    let data = Enemy.generateData()
    super.restart(data.x, data.y)
    this.setFrame(data.frame)
  }
}
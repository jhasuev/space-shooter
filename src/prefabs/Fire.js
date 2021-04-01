import MovableObject from "./MovableObject"
import config from "../config"

export default class Fire extends MovableObject {
  constructor(data) {
    super({ ...data })
  }

  static generateData(source) {
    return {
      x: source.x,
      y: source.y,
      velocity: -1300,
    }
  }

  static generate(scene, source) {
    return new this({
      scene,
      ...this.generateData(source),
      texture: "fire",
    })
  }

  isDead() {
    return this.y < 0
  }

  restart(source) {
    let data = Fire.generateData(source)
    super.restart(data.x, data.y)
  }
}
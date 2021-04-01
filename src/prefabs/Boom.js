import MovableObject from "./MovableObject"
import config from "../config"

export default class Boom extends MovableObject {
  constructor(data) {
    super({ ...data })

    let frames = this.scene.anims.generateFrameNames("boom", {
      prefix: "boom",
      start: 1,
      end: 32,
    })

    this.scene.anims.create({
      frames,
      frameRate: 60,
      repeat: 0,
      key: "boom",
    })

    this.play("boom")

    this.on("animationcomplete", () => {
      this.setAlive(false)
    })

    this.setDepth(11)
  }

  static generateData(source) {
    return {
      x: source.x,
      y: source.y,
      velocity: 0,
      texture: "boom",
      frame: "boom1",
    }
  }

  static generate(scene, source) {
    return new this({
      scene,
      ...this.generateData(source),
    })
  }

  start(source) {
    let data = Boom.generateData(source)
    super.restart(data.x, data.y)

    this.setFrame(data.frame)
    this.play("boom")
  }
}
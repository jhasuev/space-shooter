import MovableObject from "./MovableObject"

export default class Boom extends MovableObject {
  constructor(data) {
    super({ ...data })

    this.setDepth(11)
    
    this.initAnims()
    this.play("boom")
  }

  initAnims() {
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

    this.on("animationcomplete", () => {
      this.scene.tweens.add({
        targets: this,
        duration: 70,
        alpha: 0,
        onComplete: () => {
          this.setAlive(false)
          this.setAlpha(1)
        },
      })
    })
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
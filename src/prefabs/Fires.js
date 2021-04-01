import Phaser from "../phaser"
import config from "../config"
import Fire from "./Fire"

export default class Fires extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
  }

  createFire(source) {
    let fire = this.getFirstDead()
    if (fire) {
      fire.restart(source)
    } else {
      fire = Fire.generate(this.scene, {
        ...source,
        y: source.y - source.height / 2,
      })
      fire.setOrigin(.5, 1)
      this.add(fire)
    }

    fire.move()
  }
}
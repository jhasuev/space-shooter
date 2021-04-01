import Phaser from "../phaser"
import Boom from "./Boom"

export default class Booms extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
  }

  createBoom(source) {
    let boom = this.getFirstDead()
    if (boom) {
      boom.start(source)
    } else {
      boom = Boom.generate(this.scene, source)
      this.add(boom)
    }
  }
}
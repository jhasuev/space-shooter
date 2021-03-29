import Phaser from "../phaser"
import config from "../config"

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, config.width / 2, config.height / 1.25, "npc", "player")
    this.scene.add.existing(this)
  }
}
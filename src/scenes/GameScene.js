import Phaser from "../phaser"
import config from "../config"
import Player from "../prefabs/Player"
import Enemies from "../prefabs/Enemies"
import Booms from "../prefabs/Booms"

export default class GameScene extends Phaser.Scene {
  constructor() {
    super("Game")
  }

  create() {
    this.createBackground()
    this.createPlayer()
    this.addOverlap()
  }

  createBackground() {
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createPlayer() {
    this.player = new Player(this).setDepth(10)
    this.enemies = new Enemies(this)
    this.booms = new Booms(this)

    this.cursors = this.input.keyboard.createCursorKeys()
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  addOverlap() {
    this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this)
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this)
  }

  onOverlap(source, target) {
    let enemy = [source, target].find(item => item.texture.key === "npc" && item.frame.name !== "player")
    if (enemy) {
      this.booms.createBoom(enemy)
    }

    source.setAlive(false)
    target.setAlive(false)
  }

  update() {
    this.bg.tilePositionY -= .5
  }
}
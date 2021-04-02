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
    this.createEnemies()
    this.createBooms()
    this.createEvents()
    this.addOverlap()

    this.createInfo()
    this.createSounds()
  }

  createSounds() {
    if (this.sounds) return;

    this.sounds = {
      theme: this.sound.add("theme"),
      boom: this.sound.add("boom", { volume: .2 }),
    }

    this.sounds.theme.play({ volume: .5, loop: true })
  }

  createInfo() {
    this.initInfo()

    this.info = this.add.text(20, 20, this.getCurrentInfo(), {
      ...config.textStyles,
      fontSize: "21px",
    }).setDepth(12)
  }

  initInfo() {
    this.score = 0
    this.bullets = 10
  }

  updateInfo() {
    this.info.setText(this.getCurrentInfo())
  }

  addScore() {
    this.score += 1
  }

  addBullet() {
    this.bullets += 2
  }

  onFire() {
    this.bullets -= 1
  }

  canFire() {
    return this.bullets > 0
  }

  getCurrentInfo() {
    return [
      `Scores: ${this.score}`,
      `Bullets: ${this.bullets}`,
    ].join("\n")
  }

  createBackground() {
    this.bg = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createPlayer() {
    this.player = new Player(this).setDepth(10)

    this.events.off("fire", this.onFire, this)
    this.events.on("fire", this.onFire, this)
  }

  createEnemies() {
    this.enemies = new Enemies(this)
  }

  createBooms() {
    this.booms = new Booms(this)
  }

  createEvents() {
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
      this.addScore()
      this.addBullet()
      this.sounds.boom.play()
    }

    let player = [source, target].find(item => item.texture.key === "npc" && item.frame.name === "player")
    if (player) {
      this.booms.createBoom(player)
      this.scene.start("Start")
    }

    source.setAlive(false)
    target.setAlive(false)
  }

  update() {
    this.bg.tilePositionY -= .5
    this.updateInfo()
  }
}
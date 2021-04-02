import Enemy from "./Enemy"

export default class Enemies extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene)
    this.scene = scene
    this.createTimer()
  }

  createTimer() {
    this.timer = this.scene.time.addEvent({
      delay: 2000,
      loop: true,
      callback: this.onTick,
      callbackScope: this,
    })
  }

  onTick() {
    this.createEnemy()
  }

  createEnemy() {
    let enemy = this.getFirstDead()
    if (enemy) {
      enemy.restart()
    } else {
      enemy = Enemy.generate(this.scene)
      this.add(enemy)
    }

    enemy.move()
  }
}
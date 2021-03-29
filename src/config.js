import PreloadScene from "./scenes/PreloadScene"
import GameScene from "./scenes/GameScene"

const config = {
  scene: [PreloadScene, GameScene],
  width: 480,
  height: 720,
  type: Phaser.AUTO,
}

export default config
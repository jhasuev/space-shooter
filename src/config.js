import BootScene from "./scenes/BootScene"
import PreloadScene from "./scenes/PreloadScene"
import StartScene from "./scenes/StartScene"
import GameScene from "./scenes/GameScene"

const config = {
  scene: [
    BootScene,
    PreloadScene,
    StartScene,
    GameScene,
  ],
  width: 480,
  height: 720,
  type: Phaser.CANVAS,
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },
  textStyles: {
    fontSize: "30px",
    fontFamily: "CurseCasual",
  },
}

export default config
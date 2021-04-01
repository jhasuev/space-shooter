import PreloadScene from "./scenes/PreloadScene"
import StartScene from "./scenes/StartScene"
import GameScene from "./scenes/GameScene"

const config = {
  scene: [
    PreloadScene,
    StartScene,
    GameScene,
  ],
  width: 480,
  height: 720,
  type: Phaser.AUTO,
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
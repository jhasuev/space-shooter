import './scss/main.scss'
import Phaser from "./phaser"
import config from "./config"

const game = new Phaser.Game(config)
// todo: добавить врагов
// todo: добавить общий класс для врагов и игрока
// todo: добавить потронов
// todo: при коллизии патрона с врагом, убрать врага и потрон
// todo: при коллизии игрока с врагом - убрать врага и игрока
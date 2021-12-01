import Phaser, { Game, Types } from 'phaser'
import { GRAVITY_FORCE, WINDOW_HEIGHT, WINDOW_WIDTH } from './constants'
import MainScene from './scenes/MainScene'

const config: Types.Core.GameConfig = {
    type: Phaser.AUTO,
	width: WINDOW_WIDTH,
	height: WINDOW_HEIGHT,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: 
            { 
                y: GRAVITY_FORCE 
            },
            checkCollision: {
                right: true,
                left: true,
                up: false,
                down: false
            }
		}
	},
	scene: [MainScene]
}

export default new Game(config)
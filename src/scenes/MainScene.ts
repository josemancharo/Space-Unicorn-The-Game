import { Scene } from 'phaser';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants';
import MarshmallowLaser from '../sprites/MarshmallowLaser';
import Unicorn from '../sprites/Unicorn';

export default class MainScene extends Scene {
    #player: Unicorn
    #pointer: MarshmallowLaser
    #background: Phaser.GameObjects.Image;
    constructor() {
        super('game-scene')
        this.#player = new Unicorn(this);
        this.#pointer = new MarshmallowLaser(this);
    }

    preload() {
        this.load.image('background', 'earth_from_space.png')
        this.load.image('stars', "heart_galaxy.jfif")
        this.#player.preload()
        this.#pointer.preload();
    }

    create() {
        const backdrop = this.add.image(WINDOW_WIDTH/2, WINDOW_HEIGHT/2, "stars")
        backdrop.setScale(WINDOW_WIDTH/backdrop.width, WINDOW_HEIGHT/backdrop.height)
        this.#background = this.add.image(WINDOW_WIDTH/2, 2*WINDOW_HEIGHT, 'background')
        this.#background.setScale(1, 1)

        this.#player.create();
        this.#pointer.create();
    }

    update() {
        this.#background.rotation -= 0.001
        this.#pointer.update()
    }
}
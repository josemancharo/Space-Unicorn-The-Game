import { Scene } from "phaser";

export default class Explosion {
    #scene: Scene;
    constructor(scene: Scene) {
        this.#scene = scene;
    }

    preload() {
        this.#scene.load.image('exlosion', 'explosion_clean.gif')
    }

    newExplosion(x: number, y: number) {
        const sprite = this.#scene.add.sprite(x, y, 'exlosion')
        sprite.setVisible(true)
    }
}
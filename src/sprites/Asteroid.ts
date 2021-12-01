import { Scene } from "phaser";

export default class Asteroid {
    #scene: Scene;
    constructor(scene: Scene) {
        this.#scene = scene;
    }

    preload(){
        this.#scene.load.atlas('asteroids', 'asteroid_spritesheet.png', 'asteroids.json')
    }


}
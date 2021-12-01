import { GameObjects, Scene } from "phaser";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants";
import Explosion from "./Explosion";

export default class MarshmallowLaser {
    #scene: Scene;
    #sprite: GameObjects.Sprite;
    #explosion: Explosion;
    unicornAnimation: false|Phaser.Animations.Animation;
    constructor(scene: Scene) {
        this.#scene = scene;
        this.#explosion = new Explosion(this.#scene);
    }

    mouseX = () => this.#scene.input.mousePointer.position.x 
    mouseY = () => this.#scene.input.mousePointer.position.y

    preload() {
        this.#scene.load.image('marshmallow', 'marshmallow_laser.png')

    }

    create() { 
        this.#sprite = this.#scene.add.sprite(this.mouseX(), this.mouseY(), 'marshmallow')
        this.#sprite.setScale(0.1,0.1)
    }

    update(){
        this.#sprite.setPosition(this.mouseX(), this.mouseY())
    }
}
import { GameObjects, Scene } from "phaser";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants";
import Explosion from "./Explosion";

export default class MarshmallowLaser {
    #scene: Scene;
    sprite: GameObjects.Sprite;
    #explosion: Explosion;
    unicornAnimation: false|Phaser.Animations.Animation;
    constructor(scene: Scene) {
        this.#scene = scene;
        this.#explosion = new Explosion(this.#scene, this);
    }

    mouseX = () => this.#scene.input.mousePointer.position.x 
    mouseY = () => this.#scene.input.mousePointer.position.y

    preload() {
        this.#scene.load.image('marshmallow', 'marshmallow_laser.png');
        this.#explosion.preload()
    }

    create() { 
        this.sprite = this.#scene.add.sprite(this.mouseX(), this.mouseY(), 'marshmallow').setInteractive()
        this.sprite.setScale(0.1,0.1)

        this.#explosion.create()
    }

    update(){
        this.sprite.setPosition(this.mouseX(), this.mouseY())
    }
}
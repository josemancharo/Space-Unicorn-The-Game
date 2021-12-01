import { Scene } from "phaser";
import MarshmallowLaser from "./MarshmallowLaser";

export default class Explosion {
    #scene: Scene;
    emitter: Phaser.GameObjects.Particles.ParticleEmitter;
    #marsmallow: MarshmallowLaser
    constructor(scene: Scene, wand: MarshmallowLaser) {
        this.#scene = scene;
        this.#marsmallow = wand;
    }

    mouseX = () => this.#scene.input.mousePointer.position.x
    mouseY = () => this.#scene.input.mousePointer.position.y

    preload() {
        this.#scene.load.image('particle', 'green.png')
    }

    create() {
        const particles = this.#scene.add.particles('particle')
        this.emitter = particles.createEmitter(
            {
                x: this.mouseX(),
                y: this.mouseY(),
                lifespan: { min: 600, max: 800 },
                angle: { start: 0, end: 360, steps: 64 },
                speed: 200,
                quantity: 64,
                scale: { start: 0.2, end: 0.1 },
                frequency: 32,
                blendMode: 'ADD'
            });

        this.emitter.startFollow(this.#marsmallow.sprite)
        this.emitter.setVisible(false)

        this.#marsmallow.sprite.on('pointerdown', () => {
            this.emitter.setVisible(true)
        })
        this.#marsmallow.sprite.on('pointerup', () => {
            window.setTimeout(() => this.emitter.setVisible(false), 10)
        })
    }

}
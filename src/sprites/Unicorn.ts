import { Scene, GameObjects } from 'phaser';
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../constants';
import Metadata from "./unicorn.json"

export default class Unicorn {
    #scene: Scene;
    #sprite: GameObjects.Sprite;
    unicornAnimation: false|Phaser.Animations.Animation;
    constructor(scene: Scene) {
        this.#scene = scene;

    }

    preload() {
        this.#scene.load.spritesheet('unicorn', '/unicorn.spritesheet.png', { frameWidth: Metadata.size.x, frameHeight: Metadata.size.y })

    }

    create() { 
        this.#sprite = this.#scene.add.sprite(WINDOW_WIDTH/2, WINDOW_HEIGHT/2, 'unicorn');
        this.createAnimation();
        this.#sprite.anims.play("unicorn_walk")
        
    }

    createAnimation(){
        let animConfig = {
            key: "unicorn_walk",
            frames: this.#scene.anims.generateFrameNumbers("unicorn", { frames: [ 0,1,2,3,4,5 ] }),
            frameRate: 6,
            repeat: -1,
        };
        this.unicornAnimation = this.#scene.anims.create(animConfig);
        
    }

}
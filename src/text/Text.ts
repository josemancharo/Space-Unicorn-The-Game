import { Scene } from "phaser";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../constants";

export function createMessage(scene: Scene, message: string) {
    const text1 = scene.add.text(
        0,
        WINDOW_HEIGHT / 5,
        message,
        {
            align: 'center',
            fontSize: "32pt",
            fontFamily: "cursive",
            fixedWidth: WINDOW_WIDTH/1.5,
        });
    text1.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
}
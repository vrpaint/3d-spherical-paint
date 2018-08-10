import * as BABYLON from 'babylonjs';
import { World } from '../World/World';

export function createCamera(
    world: World,
): BABYLON.FreeCamera | BABYLON.WebVRFreeCamera {
    const scene = world.scene;

    if (!world.webVR) {
        const camera = new BABYLON.FreeCamera(
            'FreeCamera',
            BABYLON.Vector3.Zero(),
            scene,
        );
        camera.fov = 1.3;
        camera.attachControl(document.getElementById('scene'), true);

        return camera;
    } else {
        const camera = new BABYLON.WebVRFreeCamera(
            'camera',
            BABYLON.Vector3.Zero(),
            scene,
        );

        scene.onPointerDown = function() {
            camera.getEngine().enableVR();
        };

        return camera;
    }
}

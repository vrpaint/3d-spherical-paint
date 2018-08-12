import * as BABYLON from 'babylonjs';
import { World } from '../World/World';
import { createCamera } from './createCamera';
import { setPlayerMouseLock } from './setPlayerMouseLock';

export class Player {
    public mesh: BABYLON.AbstractMesh;
    public camera: BABYLON.FreeCamera;

    constructor(public world: World) {
        this.camera = createCamera(world);
        //setPlayerMouseLock(this.world.canvasElement, this.camera);
    }
}

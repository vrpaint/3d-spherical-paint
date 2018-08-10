import * as BABYLON from 'babylonjs';
import { Player } from '../Player';
import { createScene } from './createScene';
import { createSphere } from './createSphere';

export class World {
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public webVR: boolean; //todo maybe enum
    public lights: BABYLON.Light[];
    public player: Player;
    public sphereMesh: BABYLON.AbstractMesh;

    constructor(public canvasElement: HTMLCanvasElement) {}

    run() {
        this.webVR = !(
            window.location.pathname === '/novr' ||
            window.location.hash === '#novr'
        );

        //this.bricks=[];
        this.engine = new BABYLON.Engine(this.canvasElement, true, {
            preserveDrawingBuffer: true,
        });

        this.engine.runRenderLoop(() => {
            this.scene.render();
        });

        window.addEventListener('resize', () => {
            this.engine.resize();
        });

        this.scene = createScene(this.engine);
        this.player = new Player(this);
        this.sphereMesh = createSphere(this.scene);
    }
}

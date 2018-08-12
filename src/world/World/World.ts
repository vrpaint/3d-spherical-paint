import * as BABYLON from 'babylonjs';
import { Player } from '../Player';
import { createScene } from './createScene';
import { createContext } from './createContext';

export class World {
    public engine: BABYLON.Engine;
    public scene: BABYLON.Scene;
    public webVR: boolean; //todo maybe enum
    public lights: BABYLON.Light[];
    public player: Player;
    public context: CanvasRenderingContext2D;

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
        this.context = createContext(this.scene);

        const ctx = this.context;
        ctx.beginPath();
        ctx.rect(0,0,100,100);
        ctx.fillStyle = "red";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(100,100);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(100,0);
        ctx.lineTo(0,100);
        ctx.stroke();


        this.canvasElement.addEventListener('click',  ()=>{
            const pickResult = this.scene.pick(this.scene.pointerX, this.scene.pointerY);

            if(pickResult.pickedPoint){

                console.log(pickResult.pickedPoint);
                console.log(this.worldVectorToScreen(pickResult.pickedPoint));

            }
           


         });



    }



    worldVectorToScreen(v:BABYLON.Vector3){
        let iden = BABYLON.Matrix.Identity();
        let camera = this.scene.activeCamera;

        let p = BABYLON.Vector3.Project(v, iden, this.scene.getTransformMatrix(),
                    camera.viewport.toGlobal(this.engine.getRenderWidth(), this.engine.getRenderHeight()));

        return new BABYLON.Vector2(p.x, p.y);
    }
}

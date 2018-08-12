import * as BABYLON from 'babylonjs';

export function createContext(scene: BABYLON.Scene): CanvasRenderingContext2D {
    const mesh = BABYLON.Mesh.CreateSphere('sphere', 100, 100, scene);

    const material = new BABYLON.StandardMaterial('sphereMaterial', scene);
    material.backFaceCulling = false;


    const texture = new BABYLON.DynamicTexture('sphereTexture', {
        width: 100,
        height: 100
    }, scene, false);
    const ctx = texture.getContext();
   
    /*/
    myMaterial.emissiveTexture = new BABYLON.Texture(
        '/assets/textures/eagle_nebula_spherical_texture_by_tonviper-d5vbjws.png',
        scene,
    );
    /**/

    

    material.emissiveTexture = texture;
    mesh.material = material;


    setTimeout(()=>{
        texture.update();
    },1000);

    return ctx;
}

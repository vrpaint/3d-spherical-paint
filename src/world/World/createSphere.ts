import * as BABYLON from 'babylonjs';

export function createSphere(scene: BABYLON.Scene): BABYLON.AbstractMesh {
    const sphereMesh = BABYLON.Mesh.CreateSphere('sphere1', 100, 100, scene);

    const myMaterial = new BABYLON.StandardMaterial('myMaterial', scene);
    myMaterial.backFaceCulling = false;

    //myMaterial.diffuseColor = new BABYLON.Color3(1, 0, 1);
    //myMaterial.specularColor = new BABYLON.Color3(0.5, 0.6, 0.87);
    myMaterial.emissiveTexture = new BABYLON.Texture(
        '/assets/textures/eagle_nebula_spherical_texture_by_tonviper-d5vbjws.png',
        scene,
    );
    //myMaterial.ambientColor = new BABYLON.Color3(0.23, 0.98, 0.53);

    sphereMesh.material = myMaterial;

    return sphereMesh;
}

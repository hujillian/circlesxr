'use strict'

AFRAME.registerComponent('switch-nav-mesh', {

    init(){

        console.log("NAV MESH: ", document.querySelector('#nav-mesh'));
        console.log("SCENE: ", document.querySelector('a-scene'));

        let navMeshEntity = document.querySelector('#nav-mesh');
        let sceneEntity = document.querySelector('a-scene');

        console.log("COMPONENT: ", sceneEntity.components);
        console.log("START GAME COMPONENT: ", sceneEntity.components['start-game']);
        console.log("START GAME BOOLEAN: ", sceneEntity.components['start-game'].isOpen_lobbyFront);

        // if the lobby front door is open, switch to the second nav mesh
        if(sceneEntity.components['start-game'].isOpen_lobbyFront){
            navMeshEntity.setAttribute('gltf-model', '#navmesh2_gltf');
            console.log("switched nav mesh");
        }

        console.log("nav mesh: ", navMeshEntity.getAttribute('gltf-model'));
    },

});
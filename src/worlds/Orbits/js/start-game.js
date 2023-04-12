'use strict'

AFRAME.registerComponent('start-game', {

    init(){

        console.log("start game init");
        // this is a-scene
        const CONTEXT_AF = this; 
        
        // Variables to tell if the doors are open or not
        CONTEXT_AF.isOpen_lobbyFront = false;
        CONTEXT_AF.isOpen_diningFront = false;
        CONTEXT_AF.isOpen_diningBack = false;

        // Get the buttons in the scene
        CONTEXT_AF.button1 = document.querySelector('#button_1');
        CONTEXT_AF.button2 = document.querySelector('#button_2');
        CONTEXT_AF.button3 = document.querySelector('#button_3');
        CONTEXT_AF.button4 = document.querySelector('#button_4');
        CONTEXT_AF.button5 = document.querySelector('#button_5');
        CONTEXT_AF.button6 = document.querySelector('#button_6');

        // Get the doors in the scene
        CONTEXT_AF.door1 = document.querySelector('#lobby_front');
        CONTEXT_AF.door2 = document.querySelector('#diningHall_front');
        CONTEXT_AF.door3 = document.querySelector('#diningHall_back');

        // Set the open-doors component for the buttons
        CONTEXT_AF.button1.setAttribute('open-doors', 'id:lobby_front;');
        CONTEXT_AF.button2.setAttribute('open-doors', 'id:lobby_front;');
        CONTEXT_AF.button3.setAttribute('open-doors', 'id:diningHall_front;');
        CONTEXT_AF.button4.setAttribute('open-doors', 'id:diningHall_front;');
        CONTEXT_AF.button5.setAttribute('open-doors', 'id:diningHall_back;');
        CONTEXT_AF.button6.setAttribute('open-doors', 'id:diningHall_back;');

        // Nav meshes - switching them is not working yet
        CONTEXT_AF.navMesh = document.querySelector('#nav-mesh');
        console.log("old nav mesh: ", CONTEXT_AF.navMesh);

        // REMOVE NAV MESH ATTRIBUTE
        // CONTEXT_AF.navMesh.removeAttribute('nav-mesh');
        // console.log("removed attribute: ", CONTEXT_AF.navMesh);
        // CONTEXT_AF.navMesh.removeAttribute('gltf-model');
        // CONTEXT_AF.navMesh.setAttribute('gltf-model', '#navmesh2_gltf');
        // console.log("new gltf: ", CONTEXT_AF.navMesh);
        // console.log("new gltf model value: ", CONTEXT_AF.navMesh.getAttribute('gltf-model'));
        // CONTEXT_AF.navMesh.setAttribute('nav-mesh', '');

        // console.log("new nav mesh in doc: ", document.querySelector('#nav-mesh'));


        // DELETE nav mesh
        //CONTEXT_AF.navMesh.parentNode.removeChild(CONTEXT_AF.navMesh);

        // new nav mesh entity
        //<a-entity id="nav-mesh" gltf-model="#navmesh1_gltf" visible='false' nav-mesh position="0 1 0"></a-entity>
        // let newNavMesh = document.createElement('a-entity');
        // newNavMesh.setAttribute('id', "nav-mesh");
        // newNavMesh.setAttribute('gltf-model', "#navmesh3_gltf");
        // newNavMesh.setAttribute('visible', "false");
        // newNavMesh.setAttribute('position', "0 1 0");
        // newNavMesh.setAttribute('nav-mesh', '');

        // CONTEXT_AF.el.appendChild(newNavMesh);

        // console.log("new nav mesh: ", newNavMesh);

        

        // document.querySelector('#nav-mesh').setAttribute('gltf-model', '#navmesh2_gltf');
        // console.log("nav mesh from doc: ", document.querySelector('#nav-mesh'));
        // console.log("nav mesh from doc in context: ", CONTEXT_AF.navMesh);

        // Listen for doors opening
        CONTEXT_AF.el.addEventListener('doorOpened', function(event){
            console.log("door opened: ", event.detail.value);
            if(event.detail.value == CONTEXT_AF.door1){
                // Set isOpen to true
                CONTEXT_AF.button1.components['open-doors'].isOpen = true;
                CONTEXT_AF.button2.components['open-doors'].isOpen = true;
                // Switch nav mesh
                // console.log("nav mesh: ", CONTEXT_AF.navMesh);
                // CONTEXT_AF.navMesh.setAttribute('gltf-model', '#navmesh2_gltf');
                // CONTEXT_AF.navMesh.removeAttribute('nav-mesh');
                // console.log("nav mesh: ", CONTEXT_AF.navMesh);
                // CONTEXT_AF.navMesh.setAttribute('nav-mesh');
                // console.log("nav mesh: ", CONTEXT_AF.navMesh);
            }
            else if(event.detail.value == CONTEXT_AF.door2){
                // Set isOpen to true
                CONTEXT_AF.button3.components['open-doors'].isOpen = true;
                CONTEXT_AF.button4.components['open-doors'].isOpen = true;
            }
            else if(event.detail.value == CONTEXT_AF.door3){
                // Set isOpen to true
                CONTEXT_AF.button5.components['open-doors'].isOpen = true;
                CONTEXT_AF.button6.components['open-doors'].isOpen = true;
            }
        });

        // Listen for doors closing
        CONTEXT_AF.el.addEventListener('doorClosed', function(event){
            console.log("door closed");
            if(event.detail.value == CONTEXT_AF.door1){
                // Set isOpen to false
                CONTEXT_AF.button1.components['open-doors'].isOpen = false;
                CONTEXT_AF.button2.components['open-doors'].isOpen = false;
            }
            else if(event.detail.value == CONTEXT_AF.door2){
                // Set isOpen to false
                CONTEXT_AF.button3.components['open-doors'].isOpen = false;
                CONTEXT_AF.button4.components['open-doors'].isOpen = false;
            }
            else if(event.detail.value == CONTEXT_AF.door3){
                // Set isOpen to false
                CONTEXT_AF.button5.components['open-doors'].isOpen = false;
                CONTEXT_AF.button6.components['open-doors'].isOpen = false;
            }
        });
    },

});
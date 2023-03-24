// let isOpen_lobbyFront = false;
// let isOpen_diningFront = false;
// let isOpen_diningBack = false;


const moveDoors = function(door, doorPos, changeInY){
    door.setAttribute('animation', "property: position; to: "+ doorPos.x + " " + (doorPos.y + changeInY) + " " + doorPos.z + "; dur: 500; easing: easeInQuad;");
}

AFRAME.registerComponent('open-doors', {
    schema: {
        id:{type:'string'},
        //id__1:{type:'string'},
        //id__2:{type:'string'},
        //isOpen:{type:'boolean'},
    },

    init() {

        const CONTEXT_AF = this; 

        // we will be changing this in the start-game component
        CONTEXT_AF.isOpen = false;

        CONTEXT_AF.Door = document.querySelector("#" + CONTEXT_AF.data.id);
        CONTEXT_AF.Door.pos = CONTEXT_AF.Door.getAttribute('position');

        // CONTEXT_AF.leftDoor = document.querySelector("#" + CONTEXT_AF.data.id__1);
        // CONTEXT_AF.leftDoor.pos = CONTEXT_AF.leftDoor.getAttribute('position');

        // CONTEXT_AF.rightDoor = document.querySelector("#" + CONTEXT_AF.data.id__2);
        // CONTEXT_AF.rightDoor.pos = CONTEXT_AF.rightDoor.getAttribute('position');
        
        // when you click the button, it opens or closes the doors
        CONTEXT_AF.el.addEventListener('click', function(){
            if(CONTEXT_AF.isOpen){
                // close doors
                // moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, -6);
                // moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, -6);
                moveDoors(CONTEXT_AF.Door, CONTEXT_AF.Door.pos, -6);
                CONTEXT_AF.el.emit("doorClosed", {value: CONTEXT_AF.Door}, true);
                //CONTEXT_AF.isOpen = false;
            }
            else{
                // open door
                // moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, 6);
                // moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, 6);
                moveDoors(CONTEXT_AF.Door, CONTEXT_AF.Door.pos, 6);
                CONTEXT_AF.el.emit("doorOpened", {value: CONTEXT_AF.Door}, true);
                //CONTEXT_AF.isOpen = true;
            }
        });

    },

});

// AFRAME.registerComponent('open-doors-2', {
//     schema: {},

//     init() {

//         const CONTEXT_AF = this; 

//         CONTEXT_AF.leftDoor = document.querySelector('#diningHall_L_front');
//         CONTEXT_AF.leftDoor.pos = CONTEXT_AF.leftDoor.getAttribute('position');

//         CONTEXT_AF.rightDoor = document.querySelector('#diningHall_R_front');
//         CONTEXT_AF.rightDoor.pos = CONTEXT_AF.rightDoor.getAttribute('position');
        
//         // when you click the button, it opens or closes the doors
//         CONTEXT_AF.el.addEventListener('click', function(){
//             if(isOpen_diningFront){
//                 // close doors
//                 // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x + 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
//                 // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x - 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
//                 moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, -6);
//                 moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, -6);
//                 isOpen_diningFront = false;
//             }
//             else{
//                 // open door
//                 // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x - 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
//                 // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x + 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
//                 moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, 6);
//                 moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, 6);
//                 isOpen_diningFront = true;
//             }
//         });

//     },

// });
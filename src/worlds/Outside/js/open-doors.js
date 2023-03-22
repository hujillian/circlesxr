let isOpen_lobbyFront = false;
let isOpen_diningFront = false;
let isOpen_diningBack = false;

AFRAME.registerComponent('go-outside', {
init(){
    const CONTEXT_AF = this; 
    console.log("go outside pls");
    CONTEXT_AF.el.addEventListener('click', function(){
        console.log("go outside");
        window.location.replace =('outside.html');
        
    })
}
    
});


const moveDoors = function(door, doorPos, changeInY){

    door.setAttribute('animation', "property: position; to: "+ doorPos.x + " " + (doorPos.y + changeInY) + " " + doorPos.z + "; dur: 500; easing: easeInQuad;");

}

AFRAME.registerComponent('open-doors', {
    schema: {
        id:{type:'string'},
    },

    init() {

        const CONTEXT_AF = this; 

        CONTEXT_AF.leftDoor = document.querySelector("#" + CONTEXT_AF.data.id);
        CONTEXT_AF.leftDoor.pos = CONTEXT_AF.leftDoor.getAttribute('position');

        CONTEXT_AF.rightDoor = document.querySelector('#lobbydoor_R_front');
        CONTEXT_AF.rightDoor.pos = CONTEXT_AF.rightDoor.getAttribute('position');
        
        // when you click the button, it opens or closes the doors
        CONTEXT_AF.el.addEventListener('click', function(){
            if(isOpen_lobbyFront){
                // close doors
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x + 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x - 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, -6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, -6);
                isOpen_lobbyFront = false;
            }
            else{
                // open door
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x - 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x + 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, 6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, 6);
                isOpen_lobbyFront = true;
            }
        });

    },

});

AFRAME.registerComponent('open-doors-2', {
    schema: {},

    init() {

        const CONTEXT_AF = this; 

        CONTEXT_AF.leftDoor = document.querySelector('#diningHall_L_front');
        CONTEXT_AF.leftDoor.pos = CONTEXT_AF.leftDoor.getAttribute('position');

        CONTEXT_AF.rightDoor = document.querySelector('#diningHall_R_front');
        CONTEXT_AF.rightDoor.pos = CONTEXT_AF.rightDoor.getAttribute('position');
        
        // when you click the button, it opens or closes the doors
        CONTEXT_AF.el.addEventListener('click', function(){
            if(isOpen_diningFront){
                // close doors
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x + 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x - 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, -6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, -6);
                isOpen_diningFront = false;
            }
            else{
                // open door
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x - 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x + 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, 6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, 6);
                isOpen_diningFront = true;
            }
        });

    },

});

AFRAME.registerComponent('open-doors-3', {
    schema: {},

    init() {

        const CONTEXT_AF = this; 

        CONTEXT_AF.leftDoor = document.querySelector('#diningHall_L_back');
        CONTEXT_AF.leftDoor.pos = CONTEXT_AF.leftDoor.getAttribute('position');

        CONTEXT_AF.rightDoor = document.querySelector('#diningHall_R_back');
        CONTEXT_AF.rightDoor.pos = CONTEXT_AF.rightDoor.getAttribute('position');
        
        // when you click the button, it opens or closes the doors
        CONTEXT_AF.el.addEventListener('click', function(){
            if(isOpen_diningBack){
                // close doors
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x + 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x - 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, -6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, -6);
                isOpen_diningBack = false;
            }
            else{
                // open door
                // CONTEXT_AF.leftDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.leftDoor.pos.x - 3) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                // CONTEXT_AF.rightDoor.setAttribute('animation', "property: position; to: "+ (CONTEXT_AF.rightDoor.pos.x + 2.6) + " " + CONTEXT_AF.leftDoor.pos.y + " " + CONTEXT_AF.leftDoor.pos.z + "; dur: 500; easing: easeInQuad;");
                moveDoors(CONTEXT_AF.leftDoor, CONTEXT_AF.leftDoor.pos, 6);
                moveDoors(CONTEXT_AF.rightDoor, CONTEXT_AF.rightDoor.pos, 6);
                isOpen_diningBack = true;
            }
        });

    },

});
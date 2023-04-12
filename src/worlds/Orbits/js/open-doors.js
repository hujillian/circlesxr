// function to open and close doors with animation
const moveDoors = function(door, doorPos, changeInY){
    door.setAttribute('animation', "property: position; to: "+ doorPos.x + " " + (doorPos.y + changeInY) + " " + doorPos.z + "; dur: 500; easing: easeInQuad;");
}

AFRAME.registerComponent('open-doors', {
    schema: {
        id:{type:'string'},
    },

    init() {

        const CONTEXT_AF = this; 

        // we will be changing this in the start-game component
        CONTEXT_AF.isOpen = false;

        CONTEXT_AF.Door = document.querySelector("#" + CONTEXT_AF.data.id);
        CONTEXT_AF.Door.pos = CONTEXT_AF.Door.getAttribute('position');
        
        // when you click the button, it opens or closes the doors
        CONTEXT_AF.el.addEventListener('click', function(){
            if(CONTEXT_AF.isOpen){
                // close door
                moveDoors(CONTEXT_AF.Door, CONTEXT_AF.Door.pos, -6.5);
                CONTEXT_AF.el.emit("doorClosed", {value: CONTEXT_AF.Door}, true);
            }
            else{
                // open door
                moveDoors(CONTEXT_AF.Door, CONTEXT_AF.Door.pos, 6.5);
                CONTEXT_AF.el.emit("doorOpened", {value: CONTEXT_AF.Door}, true);
            }
        });

    },

});
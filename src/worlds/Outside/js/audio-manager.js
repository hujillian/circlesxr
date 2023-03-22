'use strict'

AFRAME.registerComponent('audio-manager',{

    init : function(){

        

        // then we create an audio object 
        const audio = new Audio({ src: 'assets/sounds/background_audio.mp3' });

        // lets try loading it 
        audio.load();

        // then we play 
        audio.play();
        
    }


});
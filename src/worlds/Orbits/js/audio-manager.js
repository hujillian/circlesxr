'use strict'

AFRAME.registerComponent('audio-manager',{

    init : function(){

        var audioElement = document.getElementById('background_audio.mp3');
        var audioSource = audioContext.createMediaElementSource(audioElement);
        audioSource.connect(audioContext.destination);

        audioElement.play();


        // Spatial Audio (x, y, z) *Coordinates

        var panner = audioContext.createPanner();
        panner.panningModel = 'HRTF';
        panner.distanceModel = 'inverse';
        panner.setPosition(0, 0, 0); // this is where set the location
        audioSource.connect(panner);
        panner.connect(audioContext.destination);

        // this is for future when we need to have audio to play at certian trigger events

        // Create an AudioContext object
        var audioContext = new AudioContext();

        // Create audio sources
        var audioSource1 = audioContext.createBufferSource();
        var audioSource2 = audioContext.createBufferSource();

        // Load audio files using fetch API
        fetch('path/to/audiofile1.mp3')
            .then(response => response.arrayBuffer())
            .then(buffer => audioContext.decodeAudioData(buffer))
            .then(decodedData => {
        audioSource1.buffer = decodedData;
        audioSource1.connect(audioContext.destination);
    });

    fetch('path/to/audiofile2.mp3')
         .then(response => response.arrayBuffer())
        .then(buffer => audioContext.decodeAudioData(buffer))
        .then(decodedData => {
    audioSource2.buffer = decodedData;
    audioSource2.connect(audioContext.destination);
  });

// Trigger playback of audio sources based on events or conditions
    function playAudioFile1() {
    audioSource1.start();
}

function playAudioFile2() {
audioSource2.start();
}

// Example usage: play audio file 1 after a delay of 3 seconds
    setTimeout(playAudioFile1, 3000);

// Example usage: play audio file 2 when a button is clicked
document.getElementById('myButton').addEventListener('click', playAudioFile2);


    }
});
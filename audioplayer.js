'use strict';

// Create an instance
var wavesurfer = Object.create(WaveSurfer);

// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {
    // Init
    wavesurfer.init({
        container: document.querySelector('#waveform'),
        waveColor: 'black',
        progressColor: 'gray',
        backend: 'MediaElement',
        hideScrollbar: 'true',
        cursorWidth: 1,
        height: 200,
        normalize: true,
        // barWidth: 2,
    });


    // Load audio from URL
    wavesurfer.load('audio/CooperQuest2_192.mp3');


    // Play button
    var button = document.querySelector('[data-action="play"]');

    button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});

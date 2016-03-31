'use strict';

// Create an instance
var wavesurfer = Object.create(WaveSurfer);

// Init & load audio file
document.addEventListener('DOMContentLoaded', function () {
    // Init
    wavesurfer.init({
        container: document.querySelector('#waveform'),
        waveColor: 'gray',
        progressColor: 'black',
        backend: 'MediaElement',
        hideScrollbar: 'true',
        cursorWidth: 1,
        height: 100,
        normalize: true,
        // barWidth: 2,
    });


    // Load audio from URL
    wavesurfer.load('audio/minute.mp3');


    // Play button
    var button = document.querySelector('[data-action="play"]');

    button.addEventListener('click', wavesurfer.playPause.bind(wavesurfer));
});

// script.js

const video = document.querySelector('video');

// Example: Pause video on click
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});

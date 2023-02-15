function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

const backgroundVideo = document.querySelector(".background-video");

backgroundVideo.src = `videos/${randomNumber(0,6)}.mp4`;



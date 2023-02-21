function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

const backgroundImage = document.querySelector(".background-image");

backgroundImage.src = `wallpapers/${randomNumber(0,13)}.jpg`;



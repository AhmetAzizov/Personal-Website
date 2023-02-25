function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min + 1;
}

const backgroundImage = document.querySelector(".background-image");

backgroundImage.src = `wallpapers/${randomNumber(0,13)}.jpg`;








const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



const myImages = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const itemSlider = document.querySelector('.items');
let itemContent = '';
let slideIndex = 0;
let autoplayInterval;

function updateSlider() {
    itemContent = '';
    for (let i = 0; i < myImages.length; i++) {
        let isVisible; 
        if (i === slideIndex) {
            isVisible = 'active';
        } else {
            isVisible = '';
        }
        itemContent += `<div class="item ${isVisible}"><img src="./img/${myImages[i]}" alt=""></div>`;
    }
    itemSlider.innerHTML = itemContent;
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % myImages.length;
    updateSlider();
}

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + myImages.length) % myImages.length;
    updateSlider();
}

function startAutoplay() {
    // imposta l'intervallo per l'autoplay
    autoplayInterval = setInterval(showNextSlide, 3000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

itemSlider.addEventListener('mouseenter', stopAutoplay);
itemSlider.addEventListener('mouseleave', startAutoplay);

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        showNextSlide();
    } else if (event.key === 'ArrowLeft') {
        showPreviousSlide();
    }
});

updateSlider();
startAutoplay();

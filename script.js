let currentIndex = 0;
const slides = document.querySelectorAll('.slider-item');
const slidesPerView = 3;
const totalSlides = slides.length;
const maxIndex = Math.ceil(totalSlides / slidesPerView) - 1;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const container = document.querySelector('.slider-container');

function showSlide(index) {
    const offset = -(index * 100);
    container.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

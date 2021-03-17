// Globals variables
let slideIndex = 0;
const backButton = document.querySelector('.slider__btn-back');
const advanceButton = document.querySelector('.slider__btn-advance');
// This function will show the slides
function appearSlides(numberSlide) {
  const slides = document.querySelectorAll('.slider__cards');
  const indicatorSides = document.querySelectorAll('.slider__circles-indicators-items');
  if (numberSlide >= slides.length) {
    slideIndex = 0;
  }
  if (numberSlide < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    indicatorSides[i].classList.remove('js-active');
  }
  slides[slideIndex].style.display = 'block';
  indicatorSides[slideIndex].classList.add('js-active');
}
appearSlides(slideIndex);
// Event handler for these buttons, back and appear
backButton.addEventListener('click', () => {
  appearSlides(--slideIndex);
});
advanceButton.addEventListener('click', () => {
  appearSlides(++slideIndex);
});
document.querySelectorAll('.slider__circles-indicators-items').forEach((element) => {
  element.addEventListener('click', function indicatorsBullets() {
    const bullets = Array.prototype.slice.call(this.parentElement.children);
    const bulletsIndex = bullets.indexOf(element);
    appearSlides(slideIndex = bulletsIndex);
  });
});

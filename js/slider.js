let slideIndex = 1;
appearSlides(slideIndex);

// Next/previous controls
function moreSlides(numberSlide) {
    appearSlides(slideIndex += numberSlide);
}

// Thumbnail image controls
function currentSlide(numberSlide) {
    appearSlides(slideIndex = numberSlide);
}

function appearSlides(numberSlide) {
    let slides = document.querySelectorAll(".slides");
    let indicatorSides = document.querySelectorAll(".slide-indicator");
    if (numberSlide > slides.length) {slideIndex = 1}
    if (numberSlide < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < indicatorSides.length; i++) {
        indicatorSides[i].className = indicatorSides[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    indicatorSides[slideIndex-1].className += " active";
}

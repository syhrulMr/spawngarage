let currentSlide = 1;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const slidesVisible =4; // Number of slides visible at once

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - slidesVisible;
  } else {
    currentSlide = index;
  }

  const offset = -currentSlide * (400 / slidesVisible);
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  // setInterval(() => {
  //   moveSlide(1);
  // }, 1000); // Change slide every 3 seconds
});

const slides = document.querySelectorAll('.slider img');
let currentIndex = 0;

function changeSlide() {
  slides[currentIndex].classList.remove('active'); // Remove active class from current slide
  currentIndex = (currentIndex + 1) % slides.length; // Move to the next slide (loop back to the first slide)
  slides[currentIndex].classList.add('active'); // Add active class to the new slide
}

// Set interval to change slides every 3 seconds (3000ms)
setInterval(changeSlide, 3000);

// Initialize the first image as active
slides[currentIndex].classList.add('active');

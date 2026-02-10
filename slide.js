const slides = document.querySelectorAll(".slide");
const captions = document.querySelectorAll(".caption");

let index = 0;

function changeSlide() {
  slides[index].classList.remove("active");
  captions[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
  captions[index].classList.add("active");
}

setInterval(changeSlide, 4500);

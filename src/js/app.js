const $prevButton = document.getElementById("data-carousel-prev");
const $nextButton = document.getElementById("data-carousel-next");

$prevButton.addEventListener("click", () => {
  carousel.prev();
  alert("salom");
});

$nextButton.addEventListener("click", () => {
  carousel.next();
  alert("salom");
});

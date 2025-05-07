const nextButton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");

const movieList = ["video/papa-zola-game-on.mp4", "video/papa-zola-the-movie-teaser.mp4", "video/Official-Teaser-Trailer.mp4"];

let index = 0;
nextButton.addEventListener("click", function () {
  index += 1;
  video.src = movieList[index];

  if (index === 2) {
    index = -1;
  }
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".hero-section .hero-info", {
  ...scrollRevealOption,
  origin: "right",
  delay: 1500,
});

ScrollReveal().reveal(".hero-section .tagline", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});
ScrollReveal().reveal(".hero-section .design-by", {
  ...scrollRevealOption,
  origin: "top",
  delay: 2000,
});

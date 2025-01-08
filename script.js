// Navigation toggle
const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
toggleButton.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Services box
const boxViews = document.querySelectorAll(".services-box"),
  boxBtns = document.querySelectorAll(".services-button"),
  boxCloses = document.querySelectorAll(".services-box-close");

let box = function (boxClick) {
  boxViews[boxClick].classList.add("active-box");
};

boxBtns.forEach((boxBtn, i) => {
  boxBtn.addEventListener("click", () => {
    box(i);
  });
});

boxCloses.forEach((boxClose) => {
  boxClose.addEventListener("click", () => {
    boxViews.forEach((boxView) => {
      boxView.classList.remove("active-box");
    });
  });
});

// Change header background on scroll
function scrollHeader() {
  const nav = document.getElementById("home");
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Scroll to top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);






















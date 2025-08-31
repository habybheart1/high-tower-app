const navToggle = document.querySelector(".nav-bar-toggle");
const navLinks = document.querySelector(".mobile-screen-navBar");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
// for journey content
const bgToggle = document.getElementById("booking-bg");

const bookingToggle = document.getElementById("booking-content");
bgToggle.addEventListener("mouseenter", () => {
  bookingToggle.classList.add("display");
});
bgToggle.addEventListener("mouseleave", () => {
  bookingToggle.classList.remove("display");
});

const navToggle = document.querySelector(".nav-bar-toggle");
const navLinks = document.querySelector(".mobile-screen-navBar");
navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

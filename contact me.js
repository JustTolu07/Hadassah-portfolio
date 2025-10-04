// Dark Mode Toggle
const darkBtn = document.getElementById("dark-toggle");
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  darkBtn.innerHTML = document.body.classList.contains("dark")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


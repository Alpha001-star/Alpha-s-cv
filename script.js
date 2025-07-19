// Toggle Mobile Navigation
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// Toggle Dark Mode
const toggleDark = document.getElementById("toggle-dark");
const body = document.body;

// Check and apply saved theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

// Toggle on button click
toggleDark.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const theme = body.classList.contains("dark-mode") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Fade-in on scroll animation
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => observer.observe(el));
// Typing animation for name
const name = "Oyebamiji Olamide Samuel";
const typedNameEl = document.getElementById("typed-name");

let index = 0;
function typeName() {
  if (index < name.length) {
    typedNameEl.textContent += name.charAt(index);
    index++;
    setTimeout(typeName, 100);
  }
}
typeName();

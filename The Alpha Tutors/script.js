// Toggle hamburger menu
function toggleMenu(icon) {
    icon.classList.toggle("active"); // animate hamburger
    document.getElementById("navMenu").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("show");
  }
  
  // Close menu when overlay or a link is clicked
  function closeMenu() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("active");
    document.getElementById("navMenu").classList.remove("show");
    document.getElementById("overlay").classList.remove("show");
  }
  
  // Dark Mode toggle
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  });
  
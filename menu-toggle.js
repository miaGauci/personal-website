document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".hamburger-menu-overlay");
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const closeButton = document.querySelector(".close-menu");

  // Initialize proper state based on screen width
  if (window.innerWidth >= 769) {
      overlay.classList.remove("active"); // Ensure overlay is hidden
      hamburgerButton.style.display = "none"; // Hide hamburger button
      closeButton.style.display = "none"; // Hide close button
  } else {
      hamburgerButton.style.display = "block"; // Show hamburger button
      closeButton.style.display = "none"; // Ensure close button is hidden
  }
});

function toggleMenu() {
  const overlay = document.querySelector(".hamburger-menu-overlay");
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const closeButton = document.querySelector(".close-menu");

  // Only allow toggle if screen width is less than 769px
  if (window.innerWidth < 769) {
      overlay.classList.toggle("active");

      if (overlay.classList.contains("active")) {
          hamburgerButton.style.display = "none"; // Hide hamburger button
          closeButton.style.display = "block"; // Show close button
      } else {
          hamburgerButton.style.display = "block"; // Show hamburger button
          closeButton.style.display = "none"; // Hide close button
      }
  }
}

// Add event listener for window resize to reset menu state
window.addEventListener("resize", () => {
  const overlay = document.querySelector(".hamburger-menu-overlay");
  const hamburgerButton = document.querySelector(".hamburger-menu");
  const closeButton = document.querySelector(".close-menu");

  if (window.innerWidth >= 769) {
      // For wider screens, ensure the overlay and buttons are hidden
      overlay.classList.remove("active"); // Ensure overlay is hidden
      hamburgerButton.style.display = "none"; // Hide hamburger button
      closeButton.style.display = "none"; // Hide close button
  } else {
      // For smaller screens, reset buttons to their initial state
      hamburgerButton.style.display = "block"; // Show hamburger button
      closeButton.style.display = "none"; // Hide close button
  }
});

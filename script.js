// JavaScript to toggle the hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Optional: Add animation to the hamburger icon
    hamburger.classList.toggle('toggle');
});

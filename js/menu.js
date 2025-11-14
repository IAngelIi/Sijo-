// Мобильное меню (гамбургер)
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Анимация гамбургера
        hamburger.classList.toggle('open');
    });
});
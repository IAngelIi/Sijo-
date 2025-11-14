// ----------------------------
// Переключение языков RU / EN
// ----------------------------
const langButtons = document.querySelectorAll('[data-lang]');
const langElements = document.querySelectorAll('[data-lang-ru]');

let currentLang = 'ru'; // по умолчанию русский

function switchLang(lang) {
    currentLang = lang;
    langElements.forEach(el => {
        el.textContent = el.getAttribute(`data-lang-${lang}`);
    });
}

// Пример кнопок переключения языка (добавьте их в header или footer)
document.addEventListener('DOMContentLoaded', () => {
    const ruBtn = document.getElementById('lang-ru');
    const enBtn = document.getElementById('lang-en');

    if (ruBtn && enBtn) {
        ruBtn.addEventListener('click', () => switchLang('ru'));
        enBtn.addEventListener('click', () => switchLang('en'));
    }
});

// ----------------------------
// Анимация появления секций при скролле
// ----------------------------
const fadeInElements = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    fadeInObserver.observe(el);
});

// ----------------------------
// Карточки игрока / достижения - hover эффекты через JS (дополнительно)
// ----------------------------
const cards = document.querySelectorAll('.player-card, .achievement-card, .feature-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 0 25px #00ff66';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 0 0 #00ff66';
    });
});
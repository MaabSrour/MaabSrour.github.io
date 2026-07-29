const langToggle = document.getElementById('langToggle');
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  const isArabic = lang === 'ar';

  document.documentElement.lang = lang;
  document.body.dir = isArabic ? 'rtl' : 'ltr';
  langToggle.textContent = isArabic ? 'English' : 'عربي';

  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
}

langToggle.addEventListener('click', () => {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
});

const langBtn = document.getElementById('langBtn');
const menuBtn = document.querySelector('.menu');
const nav = document.querySelector('.nav');
document.getElementById('year').textContent = new Date().getFullYear();

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

let lang = 'en';
langBtn.addEventListener('click', () => {
  lang = lang === 'en' ? 'ar' : 'en';
  const ar = lang === 'ar';
  document.documentElement.lang = lang;
  document.body.dir = ar ? 'rtl' : 'ltr';
  langBtn.textContent = ar ? 'English' : 'عربي';
  document.querySelectorAll('[data-en][data-ar]').forEach(el => {
    el.textContent = el.dataset[lang];
  });
});

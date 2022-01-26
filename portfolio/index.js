import i18Obj from './translate.js';
//////////////////////////const//////////////////////////
const menuBtn = document.querySelector('.hamburger__btn');
const menu = document.querySelector('.menu__list');
const menuOverlay = document.querySelector('.menu__overlay');
const menuLink = document.querySelectorAll('.menu__link');
const portfolioBtns = document.querySelector('.btn__container');
const portfolioBtn = document.querySelectorAll('.btn__portfolio');
const portfolioImgs = document.querySelectorAll('.portfolio__img');
const arrayClasses = ['body', '.header__container', '.header__logo', '.language__item', '.hero', '.hero__btn', '.section__title', '.btn__portfolio', '.contacts', '.contacts__title', '.input__contacts', '.textarea', '.btn__contacts', 'footer__social-link img', '.line', '.menu__list', '.inst', '.fb', '.tw', '.pinterest'];
const switchThemeBtn = document.querySelector('.switch__theme');
const datasetLanguage = document.querySelectorAll('[data-i18n]');
const langBtns = document.querySelector('.switch-language')
const enBtn = document.querySelector('.lang__en');
const ruBtn = document.querySelector('.lang__ru');
let lang = 'en';
let theme = 'dark';

//////////////////////////switch theme//////////////////////////
switchThemeBtn.addEventListener('click', switchTheme);

function switchTheme() {
  switchThemeBtn.classList.toggle('light');
  arrayClasses.forEach(classes => {
    document.querySelectorAll(classes).forEach(classes => {
      classes.classList.toggle('light');
    });
  });
  switchThemeBtn.classList.contains('light') ? theme = 'light' : theme = 'dark';
};

//////////////////////////translate page//////////////////////////

function getTranslate(lang) {
  datasetLanguage.forEach(item => {
    item.textContent = lang[item.dataset.i18n]
  });
};

langBtns.addEventListener('click', switchLang)

function switchLang(event) {
  if (event.target.classList.contains('lang__en')) {
    ruBtn.classList.remove('active');
    enBtn.classList.add('active');
    getTranslate(i18Obj.en);
    lang = 'en';
  };
  if (event.target.classList.contains('lang__ru')) {
    enBtn.classList.remove('active');
    ruBtn.classList.add('active');
    getTranslate(i18Obj.ru);
    lang = 'ru';
  };
};

//////////////////////////local storage//////////////////////////
function setLocalStorage() {
  localStorage.setItem('theme', theme);
  localStorage.setItem('lang', lang);
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('theme') === 'light') {
    switchTheme();
  };
  if (localStorage.getItem('lang') === 'en') {
    enBtn.classList.add('active');
    ruBtn.classList.remove('active');
    getTranslate(i18Obj.en);
    lang = 'en';
  }
  if (localStorage.getItem('lang') === 'ru') {
    enBtn.classList.remove('active');
    ruBtn.classList.add('active');
    getTranslate(i18Obj.ru);
    lang = 'ru';
  };
}
window.addEventListener('load', getLocalStorage);
//////////////////////////burger menu//////////////////////////
menuBtn.addEventListener('click', slider);
function slider() {
  if (menuBtn) {
    document.body.classList.toggle('lock');
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
  };
};

menuLink.forEach(link => link.addEventListener('click', closeMenu));

function closeMenu() {
  menuBtn.classList.remove('active');
  document.body.classList.remove('lock');
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  menuOverlay.classList.remove('active');
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      menuBtn.classList.remove('active');
      document.body.classList.remove('lock');
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
    });
  };
};

changeImage();

//////////////////////////portfolio image//////////////////////////
function changeImage() {
  portfolioBtns.addEventListener('click', event => {
    if (event.target.classList.contains('btn__portfolio')) {
      portfolioImgs.forEach((img, index) => {
        img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`
      });
    };
  });
};

portfolioBtn.forEach(btn => btn.addEventListener('click', changeClassActive));


function changeClassActive(event) {
  portfolioBtn.forEach((btn) => {
    btn.classList.remove('active');
    event.target.classList.add('active');
  });
};

////////////////////////complete tasks//////////////////////////
const completeTask = "Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css +12\nИнтерактивность, реализуемая через css +20\nИтого: 110 баллов";
const completeTask2 = "Вёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22\nИтого: 85 баллов"
const completeTask3 = "Смена изображений в секции portfolio +25\nПеревод страницы на два языка +25\nПереключение светлой и тёмной темы +25\nДополнительный функционал:выбранный пользователем язык отображения страницы и светлая или тёмная тема сохраняются при перезагрузке страницы +5\nДополнительный функционал:сложные эффекты для кнопок при наведении и/или клике +5\nИтого: 85 баллов"
console.log(completeTask);
console.log(completeTask2);
console.log(completeTask3);
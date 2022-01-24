({
  plugins: ["jsdom-quokka-plugin"]
})
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
const langBtns = document.querySelectorAll('.language__item');

//////////////////////////switch theme//////////////////////////
switchThemeBtn.addEventListener('click', switchTheme);

function switchTheme(event) {
  event.target.classList.toggle('light')
  arrayClasses.forEach(classes => {
    document.querySelectorAll(classes).forEach(classes => {
      classes.classList.toggle('light');
    })
  })
}

//////////////////////////translate page//////////////////////////
langBtns.forEach(btn => btn.addEventListener('click', switchLang));

function switchLang(event) {
  langBtns.forEach(btn => {
    btn.classList.remove('active');
    event.target.classList.add('active');
    if (event.target.dataset.lang === 'en') {
      getTranslate(i18Obj.en);
    }
    if (event.target.dataset.lang === 'ru') {
      getTranslate(i18Obj.ru);
    }
  });
}

function getTranslate(language) {
  datasetLanguage.forEach(item => {
    item.textContent = language[item.dataset.i18n]
  })
}


//////////////////////////burger menu//////////////////////////
menuBtn.addEventListener('click', slider)
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


//////////////////////////portfolio image//////////////////////////
function changeImage(event) {
  portfolioBtns.addEventListener('click', event => {
    if (event.target.classList.contains('btn__portfolio')) {
      portfolioImgs.forEach((img, index) => {
        img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`
      })
    }
  })
}

portfolioBtn.forEach(btn => btn.addEventListener('click', changeClassActive));


function changeClassActive(event) {
  portfolioBtn.forEach((btn) => {
    btn.classList.remove('active')
    event.target.classList.add('active');
  });
}


//////////////////////////complete tasks//////////////////////////
// const completeTask = "Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css +12\nИнтерактивность, реализуемая через css +20\nИтого: 110 баллов";
// const completeTast2 = "Вёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22\n"
// console.log(completeTask);
// console.log(completeTast2);
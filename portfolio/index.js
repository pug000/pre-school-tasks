const menuBtn = document.querySelector('.hamburger__btn');
const menu = document.querySelector('.menu__list');
const menuOverlay = document.querySelector('.menu__overlay');
const menuLink = document.querySelectorAll('.menu__link');

function slider() {
  if (menuBtn) {
    menuBtn.addEventListener('click', function (e) {
      document.body.classList.toggle('lock');
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
      menuOverlay.classList.toggle('active');
    });
  };
};
slider();

menuLink.forEach(link => link.addEventListener('click', closeMenu));

function closeMenu() {
  menuBtn.classList.remove('active');
  document.body.classList.remove('lock');
  menuBtn.classList.remove('active');
  menu.classList.remove('active');
  menuOverlay.classList.remove('active');
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function (e) {
      menuBtn.classList.remove('active');
      document.body.classList.remove('lock');
      menuBtn.classList.remove('active');
      menu.classList.remove('active');
      menuOverlay.classList.remove('active');
    });
  };
};
closeMenu();


const completeTask = "Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css +12\nИнтерактивность, реализуемая через css +20\nИтого: 110 баллов";
const completeTast2 = "Вёрстка соответствует макету. Ширина экрана 768px +48\nНи на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки +15\nНа ширине экрана 768рх и меньше реализовано адаптивное меню +22\n"
console.log(completeTask);
console.log(completeTast2);
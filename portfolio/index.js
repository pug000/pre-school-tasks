const hamburgerBtn = document.querySelector('.hamburger');

const toggleMenu = () => hamburgerBtn.classList.toggle('open');

hamburgerBtn.addEventListener('click', toggleMenu);

const listMenu = document.querySelector('.menu__list');

hamburgerBtn.addEventListener('click', function () {
  listMenu.classList.toggle('active');
});


const str = "Вёрстка валидная +10\nВёрстка семантическая +20\nВёрстка соответствует макету +48\nТребования к css +12\nИнтерактивность, реализуемая через css +20\nИтого: 110 баллов"
console.log(str);
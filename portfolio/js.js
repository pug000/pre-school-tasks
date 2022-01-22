({
  plugins: ["jsdom-quokka-plugin"]
})

const portfolioBtns = document.querySelector('.btn__container'); //?
const portfolioBtn = document.querySelector('.btn__portfolio') //?
portfolioBtns.addEventListener('click', changeImg(), true);

function changeImg(e) {
  e.target.classList.contains('btn__portfolio')
}
changeImg()
const game = document.querySelector('.game');
const cards = document.querySelectorAll('.game__card');
const movesCount = document.querySelector('.moves');
const timeCount = document.querySelector('.timer');
const startGameModal = document.querySelector('.start__modal');
const winGameModal = document.querySelector('.win__modal');
const startGameBtn = document.querySelector('.play__btn');
const againPlayBtn = document.querySelector('.play-again__btn');
const result = document.querySelector('.result');
let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;
let moves = 0;
let timeStart = false;
let time;
let mins = 0;
let secs = 0;
let endGame = 0;


againPlayBtn.addEventListener('click', restartGame);

function restartGame() {
  location.reload();
}

function funishGame() {
  if (endGame === 20) {
    winGameModal.style.display = 'block';
    clearInterval(time);
    result.innerHTML = `In ${moves + 1} moves`;
  }
}

cards.forEach(elem => elem.addEventListener('click', flipCard))

function flipCard() {
  if (this === firstCard) return;
  if (lockBoard) return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    checkMatch();
    setMoves();
  }
}

function checkMatch() {
  if (firstCard.dataset.animal === secondCard.dataset.animal) {
    endGame += 2;
    disableCards();
    funishGame();
  } else {
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard();
  }, 1000)
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function getRandomGame() {
  cards.forEach(elem => {
    let randomCards = Math.floor(Math.random() * 20);
    elem.style.order = randomCards;
  });
})();

function timer() {
  time = setInterval(function () {
    secs++;
    if (secs === 60) {
      mins++;
      secs = 0;
    }
    timeCount.textContent = `${(mins > 9) ? mins : '0' + mins}:${(secs > 9) ? secs : '0' + secs}`;
  }, 1000)
}

timer();

function setMoves() {
  moves++;
  movesCount.innerHTML = moves;
}
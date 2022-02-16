const cards = document.querySelectorAll('.game__card');
let lockBoard = false;
let hasFlippedCard = false;
let firstCard, secondCard;

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
  }
}

function checkMatch() {
  if (firstCard.dataset.animal === secondCard.dataset.animal) {
    disableCards();
    return;
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
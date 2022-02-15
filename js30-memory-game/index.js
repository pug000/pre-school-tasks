const cards = document.querySelectorAll('.game__card');
let hasFlippedCard = false;
let firstCard, secondCard;

cards.forEach(elem => elem.addEventListener('click', flipCard))

function flipCard() {
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
  } else {
    secondCard = this;
    hasFlippedCard = false;
    checkMatch();
  }
}

function checkMatch() {
  if (firstCard.dataset.animal === secondCard.dataset.animal) {
    disableCards();
    return;
  }
  unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
  }, 1500)
}
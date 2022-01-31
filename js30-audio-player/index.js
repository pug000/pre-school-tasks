const audio = document.querySelector('.audio');
const audioProgress = document.querySelector('.music-progress');
const player = document.querySelector('.container');
const pauseBtn = document.querySelector('.pause');
const prevBtn = document.querySelector('.prev-song');
const nextBtn = document.querySelector('.next-song');
const scaleImg = document.querySelector('.song-img');
let isPlay = false;

function playAudio() {
  pauseBtn.classList.add('play');
  scaleImg.classList.add('active');
  audio.play();
}

function pauseAudio() {
  pauseBtn.classList.remove('play');
  scaleImg.classList.remove('active');
  audio.pause();
}

pauseBtn.addEventListener('click', () => {
  isPlay = pauseBtn.classList.contains('play');
  isPlay ? pauseAudio() : playAudio();
})
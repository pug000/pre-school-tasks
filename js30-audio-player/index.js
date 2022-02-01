({
  plugins: ["jsdom-quokka-plugin"]
})


//////////////////////////const//////////////////////////
const audio = document.querySelector('.audio');
const progress = document.querySelector('.progress-bar');
const progressContainer = document.querySelector('.progress__container')
const player = document.querySelector('.container');
const pauseBtn = document.querySelector('.pause');
const prevBtn = document.querySelector('.prev-song');
const nextBtn = document.querySelector('.next-song');
const scaleImg = document.querySelector('.song-img');
const currTime = document.querySelector('.current-time');
const audioDuration = document.querySelector('.duration-time');
const volumeBtn = document.querySelector('.volume-button')
const volumeProgressContainer = document.querySelector('.volume-progress__container');
const volumeProgress = document.querySelector('.volume-progress');
const volumeBox = document.querySelector('.volume__box');
const titleSong = document.querySelector('.song-title');
const autorSong = document.querySelector('.song-autor');
const background = document.querySelector('.background');
const songImg = document.querySelector('.song-img');
let isPlay = false;
let playNum = 0;
let songs = ['Endless Love', 'Let It Happen'];
let songAutors = ['DVRST, OBLXKQ', 'Tame Impala'];

//////////////////////////change songs//////////////////////////
function loadSongs(song, autor) {
  titleSong.innerHTML = song;
  autorSong.innerHTML = autor;
  audio.src = `./assets/music/${song}.mp3`;
  background.style.backgroundImage = `url('./assets/images/${song}.jpg')`;
  songImg.style.backgroundImage = `url('./assets/images/${song}.jpg')`;

}
loadSongs(songs[playNum], songAutors[playNum]);

//////////////////////////play-pause//////////////////////////
function playAudio() {
  pauseBtn.classList.add('play');
  scaleImg.classList.add('active');
  audio.play();
};

function pauseAudio() {
  pauseBtn.classList.remove('play');
  scaleImg.classList.remove('active');
  audio.pause();
};

pauseBtn.addEventListener('click', () => {
  isPlay = pauseBtn.classList.contains('play');
  isPlay ? pauseAudio() : playAudio();
});

//////////////////////////progress bar//////////////////////////
audio.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar(event) {
  const { duration, currentTime } = event.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};

progressContainer.addEventListener('click', setProgressBar);

function setProgressBar(event) {
  const lineWidth = this.clientWidth;
  const clickX = event.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / lineWidth) * duration;
};


//////////////////////////current-duration timer//////////////////////////
audio.addEventListener('loadeddata', () => {
  audioDuration.textContent = getTimeAudio(audio.duration)
})

setInterval(() => {
  currTime.textContent = getTimeAudio(audio.currentTime);
}, 100);

function getTimeAudio(number) {
  let sec = parseInt(number);
  let min = parseInt(sec / 60);
  sec -= min * 60;
  return `${min}:${String(sec % 60).padStart(2, 0)}`;
}

//////////////////////////change volume//////////////////////////
volumeBtn.addEventListener('click', (event) => {
  if (event.target.classList.contains('volume-button')) {
    event.target.classList.toggle('muted');
  }
  event.target.classList.contains('muted') ? audio.muted = true : audio.muted = false;
})

volumeBox.onmouseover = () => {
  volumeProgressContainer.style.height = '90px';
}
volumeBox.onmouseout = () => {
  volumeProgressContainer.style.height = '0px';
}

volumeProgressContainer.addEventListener('click', changeVolume)

function changeVolume(event) {
  const lineHeight = window.getComputedStyle(volumeProgressContainer).height;
  const volumeY = event.offsetY / parseInt(lineHeight);
  audio.volume = volumeY;
  volumeProgress.style.height = volumeY * 100 + '%';
}

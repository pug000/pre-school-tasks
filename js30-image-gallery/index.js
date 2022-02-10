const searchText = document.querySelector('.search-text');
const searchSubmit = document.querySelector('.search-submit');
const body = document.querySelector('body');
const galleryContainer = document.querySelector('.column__wrapper');

url = 'https://api.unsplash.com/search/photos?query=all&per_page=30&orientation=landscape&client_id=GYIZ1_IevCrR3Y6hlMcbcsoMLulZh80f7tKT-WOCHVg';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}
getData();

function showData(data) {
  data.results.forEach(elem => {
    const img = `<div class="img" style="background-image: url(${elem.urls.regular});">`;
    galleryContainer.insertAdjacentHTML('beforeend', img);
  })
}

searchText.addEventListener('change', changeUrl)
searchSubmit.addEventListener('submit', changeUrl);

function changeUrl(e) {
  galleryContainer.innerHTML = "";
  url = `https://api.unsplash.com/search/photos?query=${e.target.value}&per_page=30&orientation=landscape&client_id=GYIZ1_IevCrR3Y6hlMcbcsoMLulZh80f7tKT-WOCHVg`;
  getData(url);
}
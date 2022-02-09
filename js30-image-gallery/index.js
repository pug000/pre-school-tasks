const galleryContainer = document.querySelector('.column__wrapper');

const url = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}
getData();

function showData(data) {
  console.log(data);
  data.results.forEach(elem => {
    const img = `<div class="img" style="background-image: url(${elem.urls.regular});">`
    galleryContainer.insertAdjacentHTML('beforeend', img);
  })
}
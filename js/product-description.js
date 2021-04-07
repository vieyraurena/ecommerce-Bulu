/* eslint-disable no-console */
const bigImg = document.getElementById('js-openImage');
const subImg = document.querySelectorAll('.card-description__image-gallery--hidden-image');
const idPresionado = localStorage.getItem('click');

const id = idPresionado - 2;

for (let i = 0; i < subImg.length; i++) {
  subImg[i].addEventListener('click', (event) => {
    const src = event.currentTarget.getAttribute('src');
    bigImg.innerHTML = `<img src=${src}>`;

    for (let e = 0; e < subImg.length; e++) {
      subImg[e].classList.remove('active');
      if (subImg[e].getAttribute('src') === src) {
        subImg[e].classList.add('active');
      }
    }
  });
}

// CONTENT WRAPPERS

const productUrl = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const productMobileTitle = document.querySelector('.card-description__mobile-title');
const productDesktopTitle = document.querySelector('.card-description__desktop-title');
const openImage = document.querySelector('.card-description__image-gallery--open-image');
const productPrice = document.querySelector('.card-description__product-price');
const productDescription = document.querySelector('.card-description__product-reference');
const userAvatar = document.querySelector('.card-description__comments__avatar');
const userName = document.querySelector('.card-description__comments__username');

function introducirProducto(data) {
  productMobileTitle.innerText = data[id].name;
  productDesktopTitle.innerText = data[id].name;
  openImage.setAttribute('src', `${data[id].avatar}`);
  subImg.forEach((element) => {
    element.setAttribute('src', `${data[id].avatar}`);
  });
  productPrice.innerText = `$ ${data[id].price}`;
  productDescription.innerText = data[id].description;

  // COMMENTS
}
fetch(productUrl, {
  method: 'GET',
})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    introducirProducto(data);
  })
  .catch((error) => {
    console.log('error', error);
  });

const apiUrl = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const containerImages1 = document.getElementById('image-1');
const containerImages2 = document.getElementById('image-2');
const containerImages3 = document.getElementById('image-3');
const containerImages4 = document.getElementById('image-4');
const containerImages5 = document.getElementById('image-5');
const containerImages6 = document.getElementById('image-6');
const containerImages7 = document.getElementById('image-7');
const containerImages8 = document.getElementById('image-8');

function addImages(images) {
  for (let i = 0; i < images.length; i++) {
    const content1 = `
    <img class="slider__images" src="${images[2].avatar}"alt="Se muestra una botella de miel a base de flores de café , totalmente natural y lista para disfrutar">
    <a data-id= "${images[2].id}" href="../product-description/index.html"><h3>${images[2].name}</h3></a>
    <p>¢${images[2].price}</p>
    <img class="slider__images image-desktop" src="${images[13].avatar}"alt="Se muestra una botella en envase de vidrio de miel 100% natural y lista para disfrutar">
    <a data-id= "${images[13].id}"  href="../product-description/index.html" class="slider__title-card"><h3>${images[13].name}</h3></a>
    <p class="slider__text-card">¢${images[13].price}</p>
    `;
    containerImages1.innerHTML = content1;
    const content2 = `
    <img class="slider__images" src="${images[4].avatar}"
    alt="Se muestra un producto nunca antes visto,  miel a base de flores de café, totalmente natural y listo para disfrutar">
    <a data-id= "${images[4].id}"  href="../product-description/index.html" ><h3>${images[4].name}</h3></a>
    <p>¢${images[4].price}</p>
    <img class="slider__images image-desktop" src="${images[14].avatar}"alt="Se muestra un producto elaborado 100% con miel, totalmente natural y listo para disfrutar">
    <a data-id= "${images[14].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[14].name}</h3></a>
    <p class="slider__text-card">¢${images[14].price}</p>
    `;
    containerImages2.innerHTML = content2;
    const content3 = `
    <img class="slider__images" src="${images[6].avatar}"
    alt="Se muestra una deliciosa botella de miel en su prentación de 355g , totalmente natural y lista para disfrutar">
    <a data-id= "${images[6].id}" href="../product-description/index.html" ><h3>${images[6].name}</h3></a>
    <p>¢${images[6].price}</p>
    <img class="slider__images image-desktop" src="${images[30].avatar}"alt="Se muestra un super alimento, una botella de polen 100% natural recomendada para subir las defensas, con sus múltiples colores y un gran sabor">
    <a data-id= "${images[30].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[30].name}</h3></a>
    <p class="slider__text-card">¢${images[30].price}</p>
    `;
    containerImages3.innerHTML = content3;
    const content4 = `
    <img class="slider__images" src="${images[19].avatar}"
    alt="Se muestra un super alimento, la miel cremosa con múltiples beneficios para tu salud, muy cremosita y lista para disfrutar">
    <a data-id= "${images[19].id}" href="../product-description/index.html" ><h3>${images[19].name}</h3></a>
    <p>¢${images[19].price}</p>
    <img class="slider__images image-desktop" src="${images[14].avatar}"alt="Se muestra una deliciosa botella de miel en su prentación de 355g , totalmente natural y lista para disfrutar">
    <a data-id= "${images[14].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[14].name}</h3></a>
    <p class="slider__text-card">¢${images[14].price}</p>
    `;
    containerImages4.innerHTML = content4;
    const content5 = `
    <img class="slider__images images-mobile" src="${images[10].avatar}"
    alt="Se muestra  un producto derivado de lamiel del bosque 100% virgen, totalmente natural y listo para disfrutar">
    <a data-id= "${images[10].id}" href="../product-description/index.html" ><h3>${images[10].name}</h3></a>
    <p>¢${images[10].price}</p>
    <img class="slider__images image-desktop" src="${images[28].avatar}"alt="Se muestran un producto que no te puedes perder, es polen, totalmente natural y listo para disfrutar">
    <a data-id= "${images[28].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[28].name}</h3></a>
    <p class="slider__text-card">¢${images[28].price}</p>

    `;
    containerImages5.innerHTML = content5;
    const content6 = `
    <img class="slider__images images-mobile" src="${images[12].avatar}"
    alt="Se muestra una botella en envase de vidrio de miel con flores de café 100% natural y lista para disfrutar">
    <a data-id= "${images[12].id}" href="../product-description/index.html"><h3>${images[12].name}</h3></a>
    <p>¢${images[12].price}</p>
    <img class="slider__images image-desktop" src="${images[31].avatar}"alt="Se muestra un producto que no puede faltarte en día a día te traemos polen 100% natural  y listo para disfrutar">
    <a data-id= "${images[31].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[31].name}</h3></a>
    <p class="slider__text-card">¢${images[31].price}</p>
    `;
    containerImages6.innerHTML = content6;
    const content7 = `
    <img class="slider__images images-mobile" src="${images[1].avatar}"
    alt="Se muestra una botella de miel, totalmente natural y lista para disfrutar">
    <a data-id= "${images[1].id}" href="../product-description/index.html"><h3>${images[1].name}</h3></a>
    <p>¢${images[1].price}</p>
    <img class="slider__images image-desktop" src="${images[14].avatar}"alt="Se muestra un  producto derivados de la miel con flores de café, totalmente natural y listo para disfrutar">
    <a data-id= "${images[14].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[14].name}</h3></a>
    <p class="slider__text-card">¢${images[14].price}</p>
    `;
    containerImages7.innerHTML = content7;
    const content8 = `
    <img class="slider__images images-mobile" src="${images[34].avatar}"
    alt="Se muestra un producto que no puede faltarte en día a día te traemos cera de abeja 100% natural  y listo para disfrutar">
    <a data-id= "${images[34].id}" href="../product-description/index.html"><h3>${images[34].name}</h3></a>
    <p>¢${images[34].price}</p>
    <img class="slider__images image-desktop" src="${images[29].avatar}"alt="Se muestra un super alimento,el polen con  múltiples beneficios para tu salud, muy cremosita y lista para disfrutar">
    <a data-id= "${images[29].id}" href="../product-description/index.html" class="slider__title-card"><h3>${images[29].name}</h3></a>
    <p class="slider__text-card">¢${images[29].price}</p>
    `;
    containerImages8.innerHTML = content8;
  }
}

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    addImages(data);
  });

let slideIndex = 0;
const backButton = document.querySelector('.slider__btn-back');
const advanceButton = document.querySelector('.slider__btn-advance');

// This function will show the slides
function appearSlides(numberSlide) {
  const slides = document.querySelectorAll('.slider__cards');
  const indicatorSides = document.querySelectorAll('.slider__circles-indicators-items');
  if (numberSlide >= slides.length) {
    slideIndex = 0;
  }
  if (numberSlide < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    indicatorSides[i].classList.remove('js-active');
  }
  slides[slideIndex].style.display = 'block';
  indicatorSides[slideIndex].classList.add('js-active');
}
appearSlides(slideIndex);
// Event handler for these buttons, back and appear
backButton.addEventListener('click', () => {
  appearSlides(--slideIndex);
});
advanceButton.addEventListener('click', () => {
  appearSlides(++slideIndex);
});
document.querySelectorAll('.slider__circles-indicators-items').forEach((element) => {
  element.addEventListener('click', function indicatorsBullets() {
    const bullets = Array.prototype.slice.call(this.parentElement.children);
    const bulletsIndex = bullets.indexOf(element);
    appearSlides(slideIndex = bulletsIndex);
  });
});

function guardarLocalStorage() {
  document.addEventListener('click', (event) => {
    const elementoClicleado = (event.target).parentNode;
    const idClicleado = elementoClicleado.getAttribute('data-id');
    console.log(idClicleado);
    localStorage.setItem('click', idClicleado);
  });
}
// eslint-disable-next-line eol-last
guardarLocalStorage();

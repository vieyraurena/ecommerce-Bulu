const bigImg = document.getElementById('js-openImage');
const subImg = document.querySelectorAll('.card-description__image-gallery--hidden-image');


for (let i = 0; i < subImg.length; i++) {
    subImg[i].addEventListener('click', (event) => {
        let src = event.currentTarget.getAttribute('src');
        bigImg.innerHTML = "<img src=" + src + ">";

        for (let i = 0; i < subImg.length; i++) {
            subImg[i].classList.remove('active');
            if (subImg[i].getAttribute('src') === src) {
                subImg[i].classList.add('active');
            }
        }
    });
}

const productUrl = "https://60410f23f34cf600173c967c.mockapi.io/api/products";
let productTitle = document.querySelector('.card-description__title');
let openImage = document.querySelector('.card-description__image-gallery--open-image');
let productPrice = document.querySelector('.card-description__product-price');
let productDescription = document.querySelector('.card-description__product-reference');
let userAvatar = document.querySelector('.card-description__comments__avatar');
let userName = document.querySelector('.card-description__comments__username');


function introducirProducto (data) {
  productTitle.innerText = data[0].name;
  openImage.setAttribute("src", `${data[0].avatar}`);
  subImg.forEach(element => {
    element.setAttribute("src", `${data[0].avatar}`);
  });
  productPrice.innerText = "$ " + data[0].price;
  productDescription.innerText = data[0].description;

  // COMMENTS

}
fetch(productUrl, {
  method: "GET"
})
.then((response) => {
  if (!response.ok) {
      throw new Error("Network response was not ok " + response.status);
  }
  return response.json();
})
.then((data) => {

  introducirProducto(data);
})
.catch((error) => {
  console.log("error", error);
});

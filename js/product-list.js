/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable radix */

const api = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const divProductList = document.querySelector('.js-list');
let products = [];

function loadProducts(p) {
  divProductList.innerHTML = '';
  const select = document.getElementById('filter');
  let contentData = '';
  let product = p;

  if (select.value === 'low') {
    product = product.sort((a, b) => a.price - b.price);
  } else if (select.value === 'high') {
    product = product.sort((a, b) => b.price - a.price);
  } else {
    product = product.sort((a, b) => a.id - b.id);
  }

  for (let i = 0; i < product.length; i += 1) {
    if (i === 10) break;
    contentData += `
    <div data-id="${product[i].id}" class="product__card">
      <div class="product__card-img">
        <img src="${product[i].avatar}">
      </div>
      <div data-id="${product[i].id}" class="product__card-data">
        <div class="product__card-price">
         <p>&#x20a1 ${product[i].price}</p>
          <button data-id="${product[i].id}"  class="btn__icon js-add__drawer">
            <span class="header__icon--user" aria-hidden="true">
              <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
              d="M18.0462 6.85028H14.542V5.40643C14.542 2.73531 12.2731 0.545471 9.5 0.545471C6.72689 0.545471 4.45798 2.73531 4.45798 5.40643V6.85028H0.953782C0.701681 6.85028 0.5 7.0428 0.5 7.28344V21.8423C0.5 22.7086 1.2563 23.4546 2.18908 23.4546H16.8109C17.7185 23.4546 18.5 22.7326 18.5 21.8423V7.3075C18.5 7.0428 18.2731 6.85028 18.0462 6.85028ZM5.39076 5.38237C5.39076 3.16847 7.23109 1.38772 9.5 1.38772C11.7689 1.38772 13.6092 3.16847 13.6092 5.38237V6.82622H5.39076V5.38237ZM16.8109 22.5883H2.18908C1.7605 22.5883 1.43277 22.2754 1.43277 21.8663V7.74066H4.45798V12.0481C4.45798 12.2888 4.65966 12.4813 4.91177 12.4813C5.16387 12.4813 5.36555 12.2888 5.36555 12.0481V7.74066H13.6092V12.0481C13.6092 12.2888 13.8109 12.4813 14.063 12.4813C14.3151 12.4813 14.5168 12.2888 14.5168 12.0481V7.74066H17.5672V21.8663C17.5924 22.2514 17.2395 22.5883 16.8109 22.5883Z"
              fill="#352B2B" />
              </svg>
            </span>
            <span class="visually-hidden span-size">añadir</span>
          </button>
        </div>
        <h3>${product[i].name}</h3>
        <p>${product[i].description}</p>
      </div>
    </div>
    `;
  }
  divProductList.innerHTML = contentData;
}

function filter() {
  loadProducts(products);
}

function paginate(_paginate) {
  let from = 0;
  let to = 0;
  const productsPaginate = [];

  from = ((_paginate + 1) * 10) - 10;
  to = ((_paginate + 1) * 10);

  if (to > products.length) to = products.length;

  while (from < to) {
    productsPaginate.push(products[from]);
    from += 1;
  }

  loadProducts(productsPaginate);
}

function isDecimal(n) {
  const result = (n - Math.floor(n)) !== 0;
  if (result) {
    return true;
  }
  return false;
}

function printPaginate(n) {
  let content = '';
  const addPagination = document.getElementById('pagination');
  for (let i = 0; i < n; i += 1) {
    content += `
      <button class="js-onclick btn" onclick="paginate(${i})">${i + 1}</button>
    `;
  }
  /* const SelectButton = document.querySelectorAll('.js-onclick');
    console.log(SelectButton); */
  addPagination.innerHTML = content;
}

function createPaginations(len) {
  let numberPaginate = 0;
  let _isDecimal = false;
  numberPaginate = len / 10;
  _isDecimal = isDecimal(numberPaginate);
  if (_isDecimal === true) {
    numberPaginate += 1;
  }
  numberPaginate = parseInt(numberPaginate);
  printPaginate(numberPaginate);
}

fetch(api, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((p) => {
    products = p;
    createPaginations(products.length);
    loadProducts(products);
  });

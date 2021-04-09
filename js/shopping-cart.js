/* eslint-disable radix */
/* eslint-disable no-console */
const Apiproduct = 'https://60410f23f34cf600173c967c.mockapi.io/api/product';
const Apiuser = 'https://60410f23f34cf600173c967c.mockapi.io/api/users';
const divUser = document.querySelector('.js-shopping__user');
const divShoppingList = document.querySelector('.js-shopsing__product-list');
const divShoppingSum = document.querySelector('.js-shopping__product-sum__total');
const deleteItemProduct = document.querySelector('.js-shopsing__product-list');
let products = [];

function productSum(p) {
  // console.log(p);
  let sum = 0;
  let total = '';
  for (let i = 0; i < p.length; i += 1) {
    const price = p[i].price.slice(2);
    console.log(price);
    sum += parseInt(price);
  }
  total += `
  <h3> &#x20a1 ${sum}</h3>
  `;
  // console.log(sum);
  divShoppingSum.innerHTML = total;
}

function loadUser(u) {
  const user = u;
  let userData = '';
  for (let i = 0; i < user.length; i += 1) {
    userData += `
    <h3 data-id="${user[i].id}">${user[i].name}</h3>
    <p>Correo: ${user[i].email}</p>
  `;
  }
  divUser.innerHTML = userData;
}

function loadProductsCart(p) {
  const productsList = p;
  let productData = '';
  for (let i = 0; i < productsList.length; i += 1) {
    productData += `
      <div data-id="${productsList[i].id}" class="shopping__product-list__data">
        <div class="shopping__product-list__data-img">
          <img src="${productsList[i].avatar}">
        </div>
        <div data-id="${productsList[i].id}" class="shopping__product-list__content">
          <div class="shopping__product-list__data-price">
            <h3>${productsList[i].title}</h3>
            <p>${productsList[i].price}</p>
          </div>
          <button class="btn__icon js__shopping--delete">×</button>
        </div>
      </div>
    `;
  }
  divShoppingList.innerHTML = productData;
}

fetch(Apiproduct, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((p) => {
    products = p;
    loadProductsCart(products);
    productSum(products);
  });

fetch(Apiuser, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((res) => res.json())
  .catch((error) => console.error('Error:', error))
  .then((u) => {
    loadUser(u);
  });

const deleteProductApi = (id) => {
  fetch(`${Apiproduct}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        // console.log('delete');
        const eliminado = document.querySelector(`[data-id='${id}']`);
        eliminado.remove();
        window.location.reload();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((err) => {
      console.log(`Ocurrió un error de tipo ${err}`);
    });
};
// console.log(deleteItemProduct);

deleteItemProduct.addEventListener('click', (event) => {
  const id = event.target.parentElement.parentElement.dataset.id;
  // console.log(id);
  if (event.target.tagName === 'BUTTON') {
    deleteProductApi(id);
  }
});

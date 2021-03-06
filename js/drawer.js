/* eslint-disable no-use-before-define */
/* eslint-disable no-console */
const apiURL = 'https://60410f23f34cf600173c967c.mockapi.io/api/product';

// constants drawer
const bag = document.querySelector('.js-header--bag');
const btn = document.querySelector('.js-drawer__header--button');
const drawer = document.querySelector('.js-drawer');
const innerUlHtml = document.querySelector('.js-drawer__container--products');

// constants nav
const collapNav = document.querySelector('.js-header__nav--hamburger');
const equisNav = document.querySelector('.js-header__btn--close');
const collap = document.querySelector('.header__collapsible');

// ============= DRAWER ================== //

const closeDrawer = () => {
  drawer.style.right = '-100%';
  // cleans Drawer
  document.querySelector.drawerItems.remove();
};

const callNav = () => {
  collap.style.left = '0px';
};

const closeNav = () => {
  collap.style.left = '-100%';
};

// ============= POST ================== //

function createInfo(product) {
  return `
    <li data-id="${product.id}" class="drawer__container--items js__drawer--items">
      <div class="drawer__items--image">
        <img src="${product.avatar}" alt="">
      </div>
      <div class="drawer__items--content">
        <h3>${product.title}</h3>
        <span>${product.price}</span>
      </div>
      <button class="btn__icon js__drawer--delete">&times;</button>
    </li>
  `;
}

function createDrawerList(productList) {
  console.log({ productList });
  const drawerItems = document.querySelector('.js__drawer--items');
  for (let i = 0; i < productList.length; i += 1) {
    drawerItems.innerHTML += createInfo(productList[i]);
    // console.log(productList[i]);
  }

  drawerItems.addEventListener('click', (event) => {
    const id = event.target.parentElement.dataset.id;
    // console.log(id);
    if (event.target.tagName === 'BUTTON') {
      deleteProduct(id);
    }
  });
}

const callDrawer = () => {
  drawer.style.right = '0px';

  fetch(apiURL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .catch((error) => console.error('Error:', error))
    // change "p" for "products"
    .then((products) => {
      // console.log(products);
      const innerList = '<ul class="js__drawer--items"></ul>';
      innerUlHtml.innerHTML = innerList;
      createDrawerList(products);
    });
};

// ============= DELETE ================== //

const deleteProduct = (id) => {
  fetch(`${apiURL}/${id}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        // console.log('delete');
        const liEliminado = getListElement(id);
        liEliminado.remove();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((err) => {
      console.log(`Ocurrió un error de tipo ${err}`);
    });
};

const addProductDrawer = (idP, titleP, imageP, priceP) => {
  const product = {
    // I add idProducts because this is the id to card
    idPrducts: idP,
    avatar: imageP,
    title: titleP,
    price: priceP,
    cantidad: 1,
  };
  // console.log(product);

  fetch(`${apiURL}`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // drawerItems.innerHTML += createInfo(data);
    });

  alert('¡Se agregó satisfactoriamente el producto a la bolsita!');
};

document.addEventListener('click', (event) => {
  if (event.target.matches('.js-add__drawer')) {
    // The id is is obtened
    const idP = event.target.dataset.id;
    // console.log(idP);
    // The id is is obtened
    const productId = event.target.parentElement;
    // The image is is obtened
    const imageP = productId.parentElement.parentElement.querySelector('img').src;
    // The title is is obtened
    const titleP = productId.parentElement.querySelector('h3').textContent;
    // The price is is obtened
    const priceP = productId.querySelector('p').textContent;

    addProductDrawer(idP, titleP, imageP, priceP);
    // console.log(addProductDrawer(idP, titleP, imageP, priceP));
  }
});

// Events
bag.addEventListener('click', callDrawer);

btn.addEventListener('click', closeDrawer);

collapNav.addEventListener('click', callNav);

equisNav.addEventListener('click', closeNav);

function getListElement(id) {
  return document.querySelector(`[data-id='${id}']`);
}

/* eslint-disable no-console */
const apiURL = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const listProducts = document.querySelectorAll('.js-add__drawer');
console.log(listProducts);
// constants drawer
const bag = document.querySelector('.js-header--bag');
const btn = document.querySelector('.js-drawer__header--button');
const drawer = document.querySelector('.js-drawer');
const drawerItems = document.querySelector('.js-drawer__container--products');

// constants nav
const collapNav = document.querySelector('.js-header__nav--hamburger');
const equisNav = document.querySelector('.js-header__btn--close');
const collap = document.querySelector('.header__collapsible');

// ============= DRAWER ================== //

const callDrawer = () => {
  drawer.style.right = '0px';
};

const closeDrawer = () => {
  drawer.style.right = '-100%';
};

const callNav = () => {
  collap.style.left = '0px';
};

const closeNav = () => {
  collap.style.left = '-100%';
};

// Events
bag.addEventListener('click', callDrawer);

btn.addEventListener('click', closeDrawer);

collapNav.addEventListener('click', callNav);

equisNav.addEventListener('click', closeNav);

// ============= POST ================== //

const createInfo = (element) => {
  const content = `
  <ul class="js__drawer--items">
    <li class="js__drawer--items">
      <div data-id="${element.id}">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
        <span>₡${element.price}</span>
        <button class="js__drawer--delete">X</button>
      </div>
    </li>
  </ul>
  `;
  drawerItems.innerHTML += content;

  // ============= DELETE ================== //

  function getListElement(id) {
    return document.querySelector(`[data-id='${id}']`);
  }

  const deleteProduct = (id) => {
    fetch(`${apiURL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
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

  drawerItems.addEventListener('click', (event) => {
    const id = event.target.parentElement.dataset.id;
    if (event.target.tagName === 'BUTTON') {
      deleteProduct(id);
    }
  });
};

const addProductDrawer = (phone, nameProd, descriptionProd, priceProd) => {
  const addProduct = {
    avatar: phone,
    name: nameProd,
    description: descriptionProd,
    price: priceProd,
  };

  fetch(`${apiURL}`, {
    method: 'POST',
    body: JSON.stringify(addProduct),
  })
    .then((response) => response.json())
    .then((data) => {
      createInfo(data);
    });
};

listProducts.addEventListener('click', (event) => {
  const target = event.target.tagName;
  addProductDrawer(target);
});

/* eslint-disable no-console */
// constants
const apiURL = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const bag = document.querySelector('.bag');
const btn = document.querySelector('button');
const drawer = document.querySelector('.drawer-main-container');
const listProducts = document.querySelector('.products');
const drawerItems = document.querySelector('.drawer-container-products');

// ============= DRAWER ================== //

const callDrawer = () => {
  let right = -550;
  const animation = setInterval(() => {
    if (right < 0) {
      right += 5;
      drawer.style.right = `${right}px`;
    } else {
      clearInterval(animation);
    }
  }, 5);
};

const closeDrawer = () => {
  const right = 0;
  if (right === 0) {
    drawer.style.transition = 'all .8s';
    drawer.style.right = `${-550}px`;
  } else {
    callDrawer();
  }
};

// Events
bag.addEventListener('click', () => {
  callDrawer();
});

btn.addEventListener('click', () => {
  closeDrawer();
});

// ============= POST ================== //

const createInfo = (element) => {
  const content = `
  <ul data-id="${element.id}" class="drawer-items">
    <li class="drawer-product">
      <div class="drawer-content">
        <h3>${element.name}</h3>
        <p>${element.description}</p>
        <span>₡${element.price}</span>
        <button class="drawer-delete">
          <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.14891 4L2.94456 22.1688C2.94456 23.1813 3.9413 24 5.17391 24H15.9022C17.1348 24 18.1315 23.1813 18.1315 22.1688L19.9043 4H1.14891ZM5.83587 20.5625L5.32609 6H6.7337L7.25869 20.5625H5.83587ZM11.1848 20.5625H9.81522V6H11.1848V20.5625ZM15.1641 20.5625H13.7489L14.0076 13.2812L14.2663 6H15.6739L15.1641 20.5625ZM18.7174 1.75H15.9783L13.9772 0.3125C13.6957 0.1125 13.338 0 12.9728 0H8.04239C7.66956 0 7.30435 0.1125 7.02283 0.3125L5.02174 1.75H2.28261C0.943478 1.75 0 2.275 0 3.375H21C21 2.275 20.0565 1.75 18.7174 1.75Z" fill="#D3A863"/>
          </svg>
        </button>
      </div>
    </li>
  </ul>
  `;
  drawerItems.innerHTML += content;
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
  console.log(id);
  if (event.target.tagName === 'BUTTON') {
    deleteProduct(id);
  }
});

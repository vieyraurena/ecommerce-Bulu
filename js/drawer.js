// constants
const apiURL = 'https://60410f23f34cf600173c967c.mockapi.io/api/products';
const bag = document.querySelector('.bag');
const btn = document.querySelector('.drawer__header--botton');
const drawer = document.querySelector('.drawer');
const listProducts = document.querySelector('.products');
const drawerItems = document.querySelector('.drawer__container--products');

// ============= DRAWER ================== //

const callDrawer = () => {
  drawer.style.right = '0px';
};

const closeDrawer = () => {
  drawer.style.right = '-100%';
};

// Events
bag.addEventListener('click', callDrawer);

btn.addEventListener('click', closeDrawer);

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
    console.log(id);
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
  // callDrawer();
});

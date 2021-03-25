// Acordeon

const acordeon = document.querySelectorAll('.acordeon');

for (let i = 0; i < acordeon.length; i += 1) {
  acordeon[i].addEventListener('click', (event) => {
    event.preventDefault();
    const elemento = event.currentTarget;
    const info = elemento.nextElementSibling;
    if (info.style.display === 'block') {
      info.style.display = 'none';
    } else {
      info.style.display = 'block';
    }
  });
}

// TABS

const tabs = document.querySelectorAll('.tabs-tablist-item');
const content = document.querySelectorAll('.tabs-content-item');

for (let i = 0; i < content.length; i++) {
  content[i].classList.add('js-content-hidden');
}

content[0].classList.remove('js-content-hidden');
tabs[0].classList.add('js-active');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', (event) => {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    for (let e = 0; e < content.length; e += 1) {
      content[e].classList.add('js-content-hidden');
      if (content[e].getAttribute('id') === id) {
        content[e].classList.remove('js-content-hidden');
      }
    }
    for (let j = 0; j < tabs.length; j += 1) {
      tabs[j].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active');
  });
}

// Acordeon

const acordeon = document.querySelectorAll('.acordeon__content--title');
const acordeonContent = document.querySelectorAll('.acordeon__content--hiddenInformation');

acordeonContent.forEach((element) => {
  element.style.display = 'none';
});
//
// ACTUAL ACORDEON
//

const acordeonFunction = (event) => {
  const elemento = event.currentTarget;
  const info = elemento.nextElementSibling;

  if (info.style.display === 'block') {
    info.style.display = 'none';
  } else {
    info.style.display = 'block';
  }
};
acordeon.forEach((element) => {
  element.addEventListener('click', acordeonFunction);
});

// TABS
const tabs = document.querySelectorAll('.tabs__tablist--title');
const content = document.querySelectorAll('.tabs__content--hiddenInformation');

//
// ACTUAL TABS
//
const tabsFunction = (event) => {
  event.preventDefault();
  const id = event.currentTarget.getAttribute('href').substring(1);
  content.forEach((element) => {
    element.classList.add('js-content-hidden');
    if (element.getAttribute('id') === id) {
      element.classList.remove('js-content-hidden');
    }
  });
  tabs.forEach((element) => {
    element.classList.remove('js-active');
  });
  event.currentTarget.classList.add('js-active');
};

content.forEach((element) => {
  element.classList.add('js-content-hidden');
});
content[0].classList.remove('js-content-hidden');
tabs[0].classList.add('js-active');

tabs.forEach((element) => {
  element.addEventListener('click', tabsFunction);
});

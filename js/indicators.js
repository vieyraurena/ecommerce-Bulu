const loc = document.location.href;
const links = document.querySelectorAll('.header__list--a');
console.log(loc);

// links.forEach((link) => {
//   if (link.href === loc) {
//     link.classList.add('js-border');
//   }
// });

window.addEventListener('load', () => {
  links.forEach((link) => {
    if (link.href === loc) {
      link.classList.add('js-border');
    }
  });
});

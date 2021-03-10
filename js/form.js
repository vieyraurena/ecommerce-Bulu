// Se declaran las constantes del DOM y se realizan las funciones para abrir y cerrar modal
const modal = document.getElementById('modal');
const openModal = document.getElementById('icon-login');
const closeModal = document.getElementsByClassName('close')[0];

openModal.onclick = () => {
  modal.style.display = 'block';
};

closeModal.onclick = () => {
  modal.style.display = 'none';
};

// Se inicia con la validación del login del modal

const form = document.querySelector('form');

const validation = () => {
  const required = document.querySelectorAll('.requerido');
  const lines = document.querySelectorAll('.line');
  const button = document.querySelector('form');

  for (let i = 0; i < required.length; i += 1) {
    if (required[i].value === '') {
      required[i].classList.add('red');
      const p = document.createElement('p');
      p.innerHTML = 'Error verificar campo';
      lines[i].appendChild(p);
    }
  }

  if (
    (required[0].value !== '')
    && (required[1].value !== '')
  ) {
    const p = document.createElement('p');
    p.innerHTML = 'Su formulario fue enviado';
    button.appendChild(p);
    form.reset();
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validation();
});

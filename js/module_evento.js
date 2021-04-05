export function idClicleado (){
  document.addEventListener('click', (event) => {
  const elementoClicleado = ((event.target).parentNode).parentNode;
  const id = elementoClicleado.getAttribute('data-id');
  console.log(id);
  });
}



import '../sass/main.scss';

const input = document.querySelector('.agregar');
const boton = document.querySelector('.botonAgregar');
const lista = document.querySelector('.lista');

boton.addEventListener('click', () => {
    const nuevaEntrada = input.value;
    if (nuevaEntrada !== "") {
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = (nuevaEntrada);
    lista.appendChild(nuevoItem);
    
    const botonEliminar = document.createElement('button.eliminar');
    botonEliminar.textContent = ' ❌';
    botonEliminar.classList.add('eliminar');

    botonEliminar.addEventListener('click', () => {
    nuevoItem.remove();
    })

    nuevoItem.appendChild(botonEliminar);
    lista.appendChild(nuevoItem);

    input.value = '';
    input.focus();
    }     
})
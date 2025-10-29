import 'sass/main.scss';

const parrafo = document.querySelector('.parrafo');
const caracteres = document.querySelector('.caracteres');
const palabras = document.querySelector('.palabras');

parrafo.addEventListener('input',() => {
    let input = parrafo.value;
    const parrafoSinEspacios = input.replace(/\s/g,"");
    const numCaracteres = parrafoSinEspacios.length;
    const palabrasArray = input.trim().split(' ').filter(p => p!== "");
    const numPalabras = palabrasArray.length;

    caracteres.textContent = `Caracteres: ${numCaracteres}`;
    palabras.textContent = `Palabras: ${numPalabras}`;
});

const reiniciar = document.querySelector('.reiniciar');

reiniciar.addEventListener('click', () => {
    parrafo.value = '';
    caracteres.textContent = 'Caracteres: 0';
    palabras.textContent = 'Palabras: 0';
});

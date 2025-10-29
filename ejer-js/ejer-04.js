import 'sass/main.scss';

const textarea = document.querySelector('.parrafo');
const inputFiltro = document.querySelector('.buscar');
const resultado = document.querySelector('.resultado');

inputFiltro.addEventListener('input', () => {
    const textoOriginal = textarea.value;
    const filtro = inputFiltro.value.toLowerCase();
    const palabras = textoOriginal.split(" ");

    const coincidencias = palabras.filter(palabra =>
        palabra.toLowerCase().includes(filtro)
    );

    resultado.textContent = coincidencias.join(' ');
});
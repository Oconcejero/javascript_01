import 'sass/main.scss';

const botonNum = document.querySelectorAll('.botonCalculadora');
const botonOP = document.querySelectorAll('.botonCalculadoraOp');
const resultado = document.querySelector('.resultado');
const botonRes = document.querySelector('.botonCalculadoraRes');

botonNum.forEach(boton => {
    boton.addEventListener('click', () => {
        const valor = boton.textContent.trim();
        if(valor !== "") {
            resultado.textContent += valor;
        }
    })
});

botonOP.forEach(boton => {
    boton.addEventListener('click', () => {
        const operador = boton.textContent.trim();
        resultado.textContent += ` ${operador} `;
    });
});

botonRes.addEventListener('click', (event) => {
    try {
    const operacion = resultado.textContent;
    const resultadoFinal = eval(operacion);
    resultado.textContent = resultadoFinal;
    } catch {
        resultado.textContent = 'Error';
    }
});

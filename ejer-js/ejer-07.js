import '../sass/main.scss';

const numCaracteres = document.querySelector('.contadorCar');
const genContr = document.querySelector('.genContr');
const resultado = document.querySelector('.result');
const error = document.querySelector('.error');


genContr.addEventListener('click', () => {
    const longitud = parseInt(numCaracteres.value);

    if(longitud >=4) {
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}'
        const carAleatorio = caracteres[Math.floor(Math.random() * caracteres.length)];

        let contraVacia = "";

        for (let i = 0; i < longitud; i++) {
            contraVacia += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        resultado.textContent = contraVacia;
        error.textContent = "";
    }else {
        error.textContent = "ERROR! La longitud debe ser mayor o igual a 4";
        resultado.textContent = "";
    }
})
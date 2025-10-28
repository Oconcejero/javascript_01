import '../sass/main.scss';

const clic = document.querySelector('.clics');
const clics = document.querySelector('.contador');
let contador = 0

clic.addEventListener("click", function() {
    contador++;
    clics.textContent = `Llevas ${contador} clics`;
})
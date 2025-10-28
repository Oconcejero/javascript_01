import '../sass/main.scss';

const botonRandom = document.querySelector('.random');

botonRandom.addEventListener("click", ()=> {
    let aleatorio1= Math.floor(Math.random() * (255+1-0) + 0);
    let aleatorio2= Math.floor(Math.random() * (255+1-0) + 0);
    let aleatorio3= Math.floor(Math.random() * (255+1-0) + 0);
    let aleatorio4= Math.floor(Math.random() * (255+1-0) + 0);
    document.body.style.backgroundColor=`rgba(${aleatorio1},${aleatorio2},${aleatorio3},${aleatorio4}`;
});

const botonBlue = document.querySelector('.blue');

botonBlue.addEventListener("click", ()=> {
    document.body.style.backgroundColor = '#0F91FC';
});

const botonRed = document.querySelector('.red');

botonRed.addEventListener("click", ()=> {
    document.body.style.backgroundColor = '#fc0f0fff';
});

const botonGreen = document.querySelector('.green');

botonGreen.addEventListener("click", ()=> {
    document.body.style.backgroundColor = '#0ffc37ff';
});
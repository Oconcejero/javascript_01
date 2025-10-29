import 'sass/main.scss';

const tiempo = document.querySelector('.tiempo p');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function actualizarTiempo() {
    const h = horas.toString().padStart(2, '0');
    const m = minutos.toString().padStart(2, '0');
    const s = segundos.toString().padStart(2, '0');

    tiempo.textContent = `${h}:${m}:${s}`;
}

start.addEventListener('click',() => {
    if(!intervalo) {
        intervalo = setInterval(() => {
            segundos++;

            if (segundos === 60) {
                segundos = 0;
                minutos++;

                if (minutos === 60) {
                    minutos = 0;
                    horas++;
                }
            }
            actualizarTiempo();
        }, 1000);
    }
})

stop.addEventListener('click',() => {
    clearInterval(intervalo);
    intervalo=null;
})

reset.addEventListener('click',() => {
    clearInterval(intervalo)
    intervalo=null;
    segundos=0;
    minutos=0;
    horas=0;
    actualizarTiempo()
})
const nuevaTarea = document.querySelector('.nueva-tarea');
const agregar = document.querySelector('.agregar');
const lista = document.querySelector('.lista-tareas');
const limpiar = document.querySelector('.limpiar');

let tareas = JSON.parse(localStorage.getItem('tareas')) || [];

function mostrarTareas() {
    lista.innerHTML = '';

    tareas.forEach((tarea, index) => {
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        const texto = document.createElement('span');

        checkbox.type = 'checkbox';
        checkbox.checked = tarea.completada;
        texto.textContent = tarea.tarea;

    
        checkbox.addEventListener('change', () => {
        tareas[index].completada = checkbox.checked;
        localStorage.setItem('tareas', JSON.stringify(tareas));
    });

        div.appendChild(checkbox);
        div.appendChild(texto);
        lista.appendChild(div);
    });
}


agregar.addEventListener('click', () => {
    const input =nuevaTarea.value.trim();
    
    if (input === '') return;

    const nTarea = {
        tarea: nuevaTarea.value,
        completada: false
    };

    tareas.push(nTarea);
    localStorage.setItem('tareas', JSON.stringify(tareas));

    nuevaTarea.value = "";
    mostrarTareas();
})

limpiar.addEventListener('click', () => {
    tareas = tareas.filter(t => !t.completada);
    localStorage.setItem('tareas', JSON.stringify(tareas));
    mostrarTareas();
});

mostrarTareas();
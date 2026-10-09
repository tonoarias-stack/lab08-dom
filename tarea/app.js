// Tarea - Version 1: solo DOM

const listaTareas = document.querySelector("#listaTareas");

const tarea1 = document.createElement("li");
tarea1.textContent = "Estudiar JavaScript";
listaTareas.appendChild(tarea1);

const tarea2 = document.createElement("li");
tarea2.textContent = "Realizar el laboratorio 8";
listaTareas.appendChild(tarea2);

// Tarea - Version 3: con clases y objetos

class Tarea {
  constructor(nombre, completada = false) {
    this.nombre = nombre;
    this.completada = completada;
  }

  alternar() {
    this.completada = !this.completada;
  }

  descripcion() {
    if (this.completada) {
      return "Completada";
    } else {
      return "Pendiente";
    }
  }
}

// Arreglo para guardar los objetos Tarea
const tareas = [];

// Tarea - Version 2: eventos y validacion
// Se conservan sus funciones, integradas con la clase Tarea.

const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const filtroTareas = document.querySelector("#filtroTareas");
const mensajeTarea = document.querySelector("#mensajeTarea");

// Preparar las tareas con sus botones y objetos
function prepararTarea(li) {
  const nombre = li.textContent.trim();

  const tarea = new Tarea(nombre);
  tareas.push(tarea);

  li.dataset.nombre = tarea.nombre.toLowerCase();

  const texto = document.createElement("span");
  texto.textContent = tarea.nombre + " ";

  const estado = document.createElement("span");
  estado.textContent = "(" + tarea.descripcion() + ") ";

  li.textContent = "";
  li.appendChild(texto);
  li.appendChild(estado);

  // Evento click: marcar y desmarcar
  const btnMarcar = document.createElement("button");
  btnMarcar.type = "button";
  btnMarcar.textContent = "Marcar";

  btnMarcar.addEventListener("click", () => {
    tarea.alternar();

    if (tarea.completada) {
      texto.style.textDecoration = "line-through";
      btnMarcar.textContent = "Desmarcar";
    } else {
      texto.style.textDecoration = "none";
      btnMarcar.textContent = "Marcar";
    }

    estado.textContent = "(" + tarea.descripcion() + ") ";
  });

  // Evento click: borrar
  const btnBorrar = document.createElement("button");
  btnBorrar.type = "button";
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    const indice = tareas.indexOf(tarea);

    if (indice !== -1) {
      tareas.splice(indice, 1);
    }

    li.remove();
  });

  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
}

// Mantener las dos tareas originales de V1
prepararTarea(tarea1);
prepararTarea(tarea2);

// Crear nuevas tareas
function agregarTarea(nombre) {
  const li = document.createElement("li");
  li.textContent = nombre;

  listaTareas.appendChild(li);
  prepararTarea(li);
}

// Buscar tareas
function filtrarTareas() {
  const busqueda = filtroTareas.value.toLowerCase();

  listaTareas.querySelectorAll("li").forEach((li) => {
    li.hidden = !li.dataset.nombre.includes(busqueda);
  });
}

// Evento submit: agregar una tarea
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputTarea.value.trim();

  // Validacion de tarea vacia
  if (nombre === "") {
    mensajeTarea.textContent = "Escribe una tarea.";
    mensajeTarea.style.color = "red";
    return;
  }

  mensajeTarea.textContent = "";

  agregarTarea(nombre);
  formTarea.reset();
  filtrarTareas();
});

// Evento input: buscar tareas
filtroTareas.addEventListener("input", filtrarTareas);

// Tarea - Version 1: solo DOM

const listaTareas = document.querySelector("#listaTareas");

const tarea1 = document.createElement("li");
tarea1.textContent = "Estudiar JavaScript";
listaTareas.appendChild(tarea1);

const tarea2 = document.createElement("li");
tarea2.textContent = "Realizar el laboratorio 8";
listaTareas.appendChild(tarea2);

// Tarea - Version 2: con eventos

const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const filtroTareas = document.querySelector("#filtroTareas");
const mensajeTarea = document.querySelector("#mensajeTarea");

// Agregar botones a las tareas
function prepararTarea(li) {
  const nombre = li.textContent.trim();
  li.dataset.nombre = nombre.toLowerCase();

  const texto = document.createElement("span");
  texto.textContent = nombre + " ";

  li.textContent = "";
  li.appendChild(texto);

  // Evento click: marcar y desmarcar
  const btnMarcar = document.createElement("button");
  btnMarcar.type = "button";
  btnMarcar.textContent = "Marcar";

  btnMarcar.addEventListener("click", () => {
    if (texto.style.textDecoration === "line-through") {
      texto.style.textDecoration = "none";
      btnMarcar.textContent = "Marcar";
    } else {
      texto.style.textDecoration = "line-through";
      btnMarcar.textContent = "Desmarcar";
    }
  });

  // Evento click: borrar
  const btnBorrar = document.createElement("button");
  btnBorrar.type = "button";
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
}

// Aplicar los eventos a las tareas originales de la V1
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

  // Validar que no este vacio
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

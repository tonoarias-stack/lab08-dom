# Tarea: Mi componente interactivo

## Componente elegido

Elegí desarrollar una lista de tareas interactiva para organizar mis actividades pendientes.

## Version 1: solo DOM

**Qué agregué:**

Creé una página HTML con una lista de tareas. En JavaScript utilicé querySelector para seleccionar la lista, createElement para crear elementos li, textContent para agregar texto y appendChild para mostrarlos en la página.

**Por qué lo agregué:**

Para aprender a crear y modificar elementos HTML desde JavaScript utilizando el DOM.

**Qué cambió en el comportamiento de la página:**

La página muestra automáticamente dos tareas: "Estudiar JavaScript" y "Realizar el laboratorio 8".

En esta primera versión todavía no se pueden agregar, marcar ni eliminar tareas porque no se han implementado eventos.

**Código principal:**

```js
const listaTareas = document.querySelector("#listaTareas");

const tarea1 = document.createElement("li");
tarea1.textContent = "Estudiar JavaScript";
listaTareas.appendChild(tarea1);

const tarea2 = document.createElement("li");
tarea2.textContent = "Realizar el laboratorio 8";
listaTareas.appendChild(tarea2);
```

## Version 2: con eventos

**Qué agregué:**

En esta segunda versión mantuve las dos tareas iniciales de la Versión 1 y agregué nuevas funciones para permitir la interacción del usuario.

Incorporé un formulario para agregar tareas, un campo para buscarlas y botones para marcarlas, desmarcarlas y eliminarlas.

Utilicé tres tipos de eventos:

- click: para marcar, desmarcar y eliminar tareas.
- input: para buscar tareas mientras se escribe.
- submit: para agregar nuevas tareas.

También agregué una validación para evitar que se ingresen tareas vacías y mostrar un mensaje de error dentro de la página.

**Por qué lo agregué:**

Para que el usuario pueda administrar sus tareas sin recargar la página.

Utilicé preventDefault() para evitar que el formulario se envíe de manera tradicional y recargue la página.

**Qué cambió en el comportamiento de la página:**

En la Versión 1 solamente se mostraban dos tareas creadas con JavaScript.

En la Versión 2 se mantienen esas tareas y ahora es posible agregar nuevas actividades, buscarlas por nombre, marcarlas como completadas, desmarcarlas y eliminarlas.

Si se intenta agregar una tarea vacía, aparece el mensaje "Escribe una tarea.".

**Código principal:**

```js
// Se conserva el codigo original de la Version 1.

// Seleccionar los nuevos elementos del HTML
const formTarea = document.querySelector("#formTarea");
const inputTarea = document.querySelector("#inputTarea");
const filtroTareas = document.querySelector("#filtroTareas");
const mensajeTarea = document.querySelector("#mensajeTarea");

// Preparar tareas para utilizar botones
function prepararTarea(li) {
  const nombre = li.textContent.trim();
  li.dataset.nombre = nombre.toLowerCase();

  const texto = document.createElement("span");
  texto.textContent = nombre + " ";

  li.textContent = "";
  li.appendChild(texto);

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

  const btnBorrar = document.createElement("button");
  btnBorrar.type = "button";
  btnBorrar.textContent = "Borrar";

  btnBorrar.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(btnMarcar);
  li.appendChild(btnBorrar);
}

// Aplicar eventos a las tareas originales
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

// Agregar una tarea con submit
formTarea.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = inputTarea.value.trim();

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

// Buscar mientras se escribe
filtroTareas.addEventListener("input", filtrarTareas);
```

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase

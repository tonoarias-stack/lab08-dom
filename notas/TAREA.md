# Tarea: Mi componente interactivo

## Componente elegido

Elegí desarrollar una lista de tareas interactiva utilizando HTML y JavaScript para organizar mis actividades pendientes.

En la primera versión utilicé el DOM para mostrar las tareas. En la segunda incorporé eventos para interactuar con ellas. Finalmente, en la tercera versión agregué una clase propia para representar cada tarea mediante un objeto.

El componente permite agregar tareas, buscarlas, marcarlas como completadas, desmarcarlas y eliminarlas.

## Version 1: solo DOM

**Qué agregué:**

Creé una página HTML con una lista de tareas. En JavaScript utilicé querySelector para seleccionar la lista, createElement para crear elementos li, textContent para agregar texto y appendChild para mostrarlos en la página.

**Por qué lo agregué:**

Para aprender a crear y modificar elementos HTML desde JavaScript utilizando el DOM.

**Qué cambió en el comportamiento de la página:**

La página muestra automáticamente dos tareas: "Estudiar JavaScript" y "Realizar el laboratorio 8".

En esta primera versión todavía no se podían agregar, marcar ni eliminar tareas porque no se habían implementado eventos.

**Código principal:**

```js
// Tarea - Version 1: solo DOM

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

En esta segunda versión mantuve las dos tareas iniciales y agregué funciones para permitir la interacción del usuario.

Incorporé un formulario para agregar tareas, un campo para buscarlas y botones para marcarlas, desmarcarlas y eliminarlas.

Utilicé tres tipos de eventos:

- click: para marcar, desmarcar y borrar tareas.
- input: para buscar tareas mientras se escribe.
- submit: para agregar nuevas tareas.

También agregué una validación para impedir que se ingresen tareas vacías y mostrar un mensaje de error directamente en la página.

**Por qué lo agregué:**

Para que el usuario pueda administrar sus tareas sin recargar la página.

Utilicé preventDefault() para evitar que el formulario recargue la página al enviarse. También utilicé createElement para crear nuevos elementos y remove para eliminarlos mediante una acción del usuario.

**Qué cambió en el comportamiento de la página:**

En la primera versión solamente aparecían dos tareas.

En la segunda versión se pueden agregar nuevas tareas, buscarlas por nombre, marcarlas como completadas, desmarcarlas y eliminarlas.

Si se intenta agregar una tarea vacía, aparece el mensaje "Escribe una tarea.".

**Código principal:**

El siguiente código se agregó debajo del código original de la V1.

```js
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

// Aplicar los eventos a las tareas de la V1
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

// Evento submit
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

// Evento input
filtroTareas.addEventListener("input", filtrarTareas);
```

## Version 3: con clases y objetos

**Qué agregué:**

En la tercera versión incorporé una clase propia llamada Tarea, con un constructor, dos atributos y dos métodos.

Los atributos son nombre y completada.

Los métodos son alternar() y descripcion().

También incorporé un arreglo llamado tareas para almacenar los objetos creados mediante la clase.

**Por qué lo agregué:**

Para organizar mejor la información y representar cada tarea como un objeto que tiene su propio nombre y estado.

**Qué cambió en el comportamiento de la página:**

Se mantienen las funciones de agregar, buscar, marcar, desmarcar y borrar tareas.

Ahora cada tarea se representa mediante un objeto de la clase Tarea. Cuando se presiona Marcar, el método alternar() cambia su estado. El método descripcion() permite mostrar si está pendiente o completada.

Al borrar una tarea, se elimina tanto el elemento HTML como su objeto del arreglo.

**Código principal:**

Este es el código de la clase y su integración con las funciones de la V2. Las instrucciones originales de la V1 y los eventos submit e input se conservan en el archivo final app.js.

```js
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

const tareas = [];

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

// Aplicar los objetos a las tareas originales
prepararTarea(tarea1);
prepararTarea(tarea2);
```

## Donde uso DOM, eventos y objetos

| Parte         | Código utilizado                                      | Para qué sirve                      |
| ------------- | ----------------------------------------------------- | ----------------------------------- |
| DOM           | document.querySelector("#listaTareas")                | Selecciona la lista HTML.           |
| DOM           | document.createElement("li")                          | Crea un elemento de la lista.       |
| DOM           | listaTareas.appendChild(li)                           | Agrega una tarea a la página.       |
| DOM           | li.remove()                                           | Elimina una tarea de la página.     |
| Evento click  | btnMarcar.addEventListener("click", ...)              | Marca y desmarca las tareas.        |
| Evento click  | btnBorrar.addEventListener("click", ...)              | Borra una tarea.                    |
| Evento input  | filtroTareas.addEventListener("input", filtrarTareas) | Busca tareas mientras se escribe.   |
| Evento submit | formTarea.addEventListener("submit", ...)             | Agrega nuevas tareas.               |
| Clase         | class Tarea                                           | Define la estructura de cada tarea. |
| Constructor   | constructor(nombre, completada = false)               | Inicializa los datos de la tarea.   |
| Objeto        | new Tarea(nombre)                                     | Crea un objeto de la clase.         |
| Atributos     | this.nombre y this.completada                         | Guardan el nombre y el estado.      |
| Método        | tarea.alternar()                                      | Cambia el estado de una tarea.      |
| Método        | tarea.descripcion()                                   | Devuelve su estado actual.          |

## Pruebas realizadas

| Acción                  | Resultado esperado                                          | Resultado obtenido                                                           | Cumple (Sí / No) |
| ----------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------- |
| Abrir la página         | Mostrar las dos tareas iniciales.                           | Se mostraron las tareas "Estudiar JavaScript" y "Realizar el laboratorio 8". | Sí               |
| Agregar "Estudiar CSS"  | La nueva tarea aparece en la lista.                         | Se agregó "Estudiar CSS" con el estado Pendiente.                            | Sí               |
| Agregar una tarea vacía | Mostrar un mensaje de error sin agregar la tarea.           | Apareció el mensaje "Escribe una tarea." y no se agregó ningún elemento.     | Sí               |
| Presionar Marcar        | Cambiar el estado de la tarea a Completada.                 | El estado cambió a Completada y el texto quedó tachado.                      | Sí               |
| Presionar Desmarcar     | Cambiar nuevamente el estado a Pendiente.                   | El estado volvió a Pendiente y se quitó el tachado.                          | Sí               |
| Presionar Borrar        | Eliminar la tarea seleccionada.                             | La tarea desapareció de la lista.                                            | Sí               |
| Buscar "JavaScript"     | Mostrar solamente las tareas que coinciden con la búsqueda. | Se mostró únicamente la tarea "Estudiar JavaScript".                         | Sí               |

## Por que disene asi mi clase

Diseñé la clase Tarea con los atributos nombre y completada porque cada actividad necesita almacenar su descripción y saber si está pendiente o terminada. El método alternar() permite cambiar el estado de la tarea sin modificar directamente sus datos desde los botones. El método descripcion() permite mostrar el estado actual en la página. Elegí esta estructura porque facilita la reutilización del código, permite crear diferentes objetos y organiza mejor las operaciones relacionadas con cada tarea.

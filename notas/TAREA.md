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

## Version 3: con clases y objetos

## Donde uso DOM, eventos y objetos

## Pruebas realizadas

## Por que disene asi mi clase

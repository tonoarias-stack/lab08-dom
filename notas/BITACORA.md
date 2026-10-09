# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.
Navegador usado: (escribe aqui cual usaste)

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion                  | Que cambio en la pantalla                      | Se mantiene al recargar (Si/No) |
| ---------------------------- | ---------------------------------------------- | ------------------------------- |
| textContent desde la consola | El titulo cambio a "Hola desde la consola".    | No                              |
| textContent desde app.js     | El titulo cambio a "Hola TECSUP".              | Si                              |
| style.color                  | El titulo cambio a color azul.                 | Si                              |
| classList.add                | El parrafo cambio a fondo amarillo.            | Si                              |
| createElement + appendChild  | Se agrego JavaScript a la lista de HTML y CSS. | Si                              |

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara          | Cuanto suma por accion |
| -------------- | ------------------------------ | ---------------------- |
| click          | Hacer un clic en el boton      | 1                      |
| dblclick       | Hacer doble clic en el boton   | 1                      |
| mouseover      | Pasar el cursor sobre el boton | 1                      |

evento.type: Mostro el tipo de evento ejecutado, como click, dblclick o mouseover.

evento.target: Mostro el elemento HTML que recibio el evento, en este caso el boton Sumar 1.

## Ejercicio 4: Eventos input y submit

| Prueba                                  | Que paso en la pantalla                                                      | Se recargo la pagina (Si/No) |
| --------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------- |
| Escribir en el campo nombre             | El saludo cambio letra por letra mientras escribia.                          | No                           |
| Enviar sin preventDefault               | El mensaje Enviado aparecio un instante y desaparecio al recargar la pagina. | Si                           |
| Enviar con preventDefault, correo sin @ | Aparecio Correo no valido: falta @ en rojo.                                  | No                           |
| Enviar con preventDefault, correo con @ | Aparecio Enviado seguido del correo ingresado.                               | No                           |

## Ejercicio 5: Clases y objetos

| Objeto  | nombre  | precio | descripcion()       | conDescuento(0.25) |
| ------- | ------- | ------ | ------------------- | ------------------ |
| laptop  | Laptop  | 2500   | Laptop - S/ 2500.00 | 1875               |
| mouse   | Mouse   | 45     | Mouse - S/ 45.00    | 33.75              |
| teclado | Teclado | 120    | Teclado - S/ 120.00 | 90                 |
| monitor | Monitor | 680    | Monitor - S/ 680.00 | 510                |

Usar una clase permite crear varios productos con diferentes nombres y precios sin repetir el mismo codigo.
Tambien facilita calcular descuentos y mostrar los productos sin escribir cada uno manualmente en HTML.

## Ejercicio 6: DOM, eventos y objetos juntos

| Prueba          | Total que muestra la pagina                         | Correcto (Si/No) |
| --------------- | --------------------------------------------------- | ---------------- |
| Cuaderno 12.50  | S/ 12.50                                            | Si               |
| + Lapicero 3.20 | S/ 15.70                                            | Si               |
| + Mochila 89.90 | S/ 105.60                                           | Si               |
| Sin Number()    | S/ 0.00 al recargar; aparece un error en la consola | No               |

| Pieza  | Linea de tu codigo donde aparece                                           | Para que sirve                                    |
| ------ | -------------------------------------------------------------------------- | ------------------------------------------------- |
| DOM    | listaCarrito.appendChild(li);                                              | Agrega el producto a la lista de la pagina.       |
| Evento | formProducto.addEventListener("submit", (evento) => {                      | Ejecuta la funcion al enviar el formulario.       |
| Objeto | const producto = new Producto(prodNombre.value, Number(prodPrecio.value)); | Crea un objeto Producto con los datos ingresados. |

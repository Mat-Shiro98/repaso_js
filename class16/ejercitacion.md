# Ejercicio: Lista de compras Interactiva
------------------------------------------------

>Crea una aplicación web simple que permita a los usuarios gestionar una lista de compras.
>La aplicación debe tener las siguientes funcionalidades:

1. Un campo de entrada de texto para que los usuarios ingresen nuevos elementos a la lista

2. Un botón "Agregar" que añada el nuevo elemento a la lista.

3. Cada elemento de la lista debe tener una casilla de verificación que permita marcar el elemento como "comprado"

4. Al hacer click en un elemento de la lista, debería cambiar su estilo para indicar que
ha sido comprado(puedes utilizar tachado,cambio de color, etc...)

5. Un botón "Limpiar" que elimine todos los elementos marcados como comprados de la lista.


    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Compras</title>
    <style>
        .comprado {
            text-decoration: line-through;
            color: #999;
        }
    </style>
</head>
<body>

<h1>Lista de Compras</h1>

<input type="text" id="nuevoElemento" placeholder="Ingrese un nuevo elemento">
    <button onclick="agregarElemento()">Agregar</button>
    <ul id="listaCompras"></ul>
    <button onclick="limpiarComprados()">Limpiar</button>

   <script>
        function agregarElemento() {
            const nuevoElemento = document.getElementById('nuevoElemento').value.trim();
            if (nuevoElemento !== '') {
                const lista = document.getElementById('listaCompras');
                const li = document.createElement('li');
                li.textContent = nuevoElemento;
                li.onclick = function() {
                    marcarComoComprado(li);
                };
                lista.appendChild(li);
                document.getElementById('nuevoElemento').value = '';
            }
        }

        function marcarComoComprado(elemento) {
            elemento.classList.toggle('comprado');
        }

        function limpiarComprados() {
            const lista = document.getElementById('listaCompras');
            const elementosComprados = lista.querySelectorAll('.comprado');
            elementosComprados.forEach(function(elemento) {
                lista.removeChild(elemento);
            });
        }
    </script>
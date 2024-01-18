# Objetivos de estudio

1. Entender bien el tema de FUNCIONES y FUNCIONES CON DOM 
>Son temas diferentes las funciones sin el DOM actuan con valores por ejemplo.

      function sumar(a, b) {
          return a + b;
        }
      let resultado = sumar(3, 4);
         console.log(resultado);  // Imprimirá 7
    
>Una función sumar es una función común que realiza una operación matemática simple y devuelve el resultado.

>Las funciones que trabajan con el DOM están diseñadas para interactuar con la estructura de la página web y modificarla según sea necesario.

    document.addEventListener('DOMContentLoaded', function() {
      let contenedor = document.getElementById('contenedor'); //Guarda la id contenedor dentro de la variable contenedor

      if (contenedor) {
        let nuevoParrafo = document.createElement('p');   // Crea una etiqueta <p> y lo guarda en la variable nuevoParrafo 
        nuevoParrafo.textContent = 'Este es un párrafo creado con JS';  // Guarda el texto en la variable nuevoParrafo
        contenedor.appendChild(nuevoParrafo);    // Y por ultimo lo agrega al HTML dentro de la (id = 'contenedor') y se muestra en pantalla
      } else {
        console.error("No se ha encontrado el elemento");
      }
    });

>Esta función, que está vinculada al evento 'DOMContentLoaded', se ejecuta cuando la estructura HTML de la página se ha cargado completamente. Su propósito es interactuar con el DOM: buscar un elemento con el id "contenedor", crear un nuevo párrafo y agregarlo como hijo al contenedor.

2. 
//Enunciado: 
Escribe una función llamada  contarVocales que reciba una cadena de texto como parámetro y devuelva la cantidad de vocales (a, e, i, o, u) presentes en esa cadena.






# Metodos de Dom

## getElementById(id):
> Obtiene un elemento del DOM por su identificador único (id).
> Retorna el primer elemento cuyo id coincide con el valor proporcionado.
> Si no se encuentra ningún elemento, devuelve null.


## getElementsByClassName(className):
> Obtiene una lista de elementos que tienen una clase específica.
> Retorna una colección HTML de elementos cuya clase coincide con el valor proporcionado.


## getElementsByTagName(tagName):
> Obtiene una lista de elementos con un nombre de etiqueta específico.
> Retorna una colección HTML de elementos que coinciden con el nombre de etiqueta especificado.


## querySelector(selector):
> Retorna el primer elemento que coincide con un selector CSS específico.
> Puedes utilizar selectores CSS como #id, .class, tag, etc., para seleccionar elementos.


## querySelectorAll(selector):
> Retorna una lista de todos los elementos que coinciden con un selector CSS específico.
> Al igual que querySelector(), puedes utilizar selectores CSS para seleccionar elementos.


## createElement(tagName):
> Crea un nuevo elemento HTML con el nombre de etiqueta especificado.
> Puedes usar este elemento para construir contenido dinámicamente antes de agregarlo al DOM.


## appendChild(element):
> Agrega un nuevo elemento como hijo de otro elemento existente.
> Puedes usarlo para insertar un nuevo elemento dentro de otro.


## removeChild(element):
> Elimina un elemento hijo de otro elemento.
> Debes proporcionar el elemento hijo que deseas eliminar.


## setAttribute(name, value):
> Establece el valor de un atributo en un elemento.
> Puedes usarlo para agregar o modificar atributos en un elemento.


## removeAttribute(name):
> Elimina un atributo de un elemento.
> Debes proporcionar el nombre del atributo que deseas eliminar.


## addEventListener(event, callback):
> Agrega un evento a un elemento.
> Puedes proporcionar el nombre del evento y una función de devolución de llamada que se ejecutará cuando ocurra el evento.


## removeEventListener(event, callback):
> Elimina un evento de un elemento.
> Debes proporcionar el nombre del evento y la misma función de devolución de llamada que se agregó previamente con addEventListener().

---------------------------------------------------------

## JSON.parse(variable)
> Esto hace q un codigo de tipo JSON pase a un objeto

## JSON.stringify(variable)
>Esto hace q un objeto pase a un JSON

## const username = usernameInput.value;
> El .value se usa cuando en el HTML tenga una etiqueta del formulario <input> <textarea>, otros y guarda el dato ingresado por el usuario en este caso el en la variable 'username'

## localStorage.setItem('username', username)
> En este caso el localStrorage.setItem('key',variable) guarda los datos del usuario ingresado por el Input que fue traido por el usernameInput que a su vez esta guardado en la variable username. 

>Esto guarda el dato de forma local y se puede usar ese mismo dato en otro .js usando el key del mismo en este caso 'username' 

    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value;
    localStorage.setItem('username', username)




## Event

* <Click>: Ocurre cuando un elemento es presionado con el ratón.

* <Doble clic>: Ocurre cuando un elemento es presionado dos veces rápidamente con el ratón.

* <Mouseover>: Ocurre cuando el puntero del ratón se sitúa sobre un elemento.

* <Change>: Ocurre cuando el valor de un elemento de formulario (como un cuadro de texto o una casilla de verificación) cambia.

* <Submit>: Ocurre cuando se envía un formulario.

* <KeyDown>, <KeyUp>: Ocurren cuando una tecla del teclado se presiona o se libera, respectivamente.

* <Load>: Ocurre cuando un recurso, como una imagen, se ha cargado completamente.

* <DOMContentLoaded>: Ocurre cuando el DOM de la página ha sido completamente cargado.

------------------------------------------------


# Metodos de Array

## push():
>Agrega un elemento al final del array.


## pop():
>Elimina el último elemento del array y lo devuelve.


## shift():
>Elimina el primer elemento del array y lo devuelve.


## unshift():
>Agrega un elemento al principio del array.


## length:
>Propiedad que devuelve la cantidad de elementos en el array.


## indexOf(elemento):
>Devuelve el índice del primer elemento encontrado o -1 si no lo encuentra.


## slice(inicio, fin):
>Devuelve una copia de una porción del array.


## splice(inicio, cantidad, elemento1, elemento2, ...):
>Cambia el contenido del array eliminando, reemplazando o agregando elementos.


## forEach(callback):
>Ejecuta una función de devolución de llamada por cada elemento del array.


## map(callback):
>Crea un nuevo array con el resultado de la función de devolución de llamada aplicada a cada elemento del array original.


## filter(callback):
>Crea un nuevo array con los elementos que pasan la prueba de la función de devolución de llamada.


## reduce(callback, valorInicial):
>Aplica una función de devolución de llamada acumulativamente a cada elemento del array.


## find(callback):
>Devuelve el primer elemento del array que cumple con la condición dada por la función de devolución de llamada.


## includes(elemento):
>Determina si el array incluye un determinado elemento y devuelve true o false.
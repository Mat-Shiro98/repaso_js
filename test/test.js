//1. Muestra los elementos en consola 
const h1Element = document.querySelector("h1")
const pElement = document.querySelector("#mi-parrafo")

console.log(h1Element)
console.log(pElement)
console.log(h1Element.textContent) // Muestra el contenido en consola del H1 en este caso


//2. Cuando la página carga por completo, se EJECUTA la function.. 
// En este codigo lo que hace es seleccionar el id de 'contenedor' y guardarlo en la variable...
// Con el if, si el contenido es correcto ejecuta el codigo del if, si existe algun error pasa al else 
document.addEventListener('DOMContentLoaded', function (){

    let contenedor = document.getElementById('contenedor')

    if(contenedor){
        let nuevoParrafo = document.createElement('p')

        nuevoParrafo.textContent = 'Este es un parrafo creado con JS'

        contenedor.appendChild(nuevoParrafo)

    }
    else{
        console.error("No se ha encontrado el elemento")
    }
});


//3. Desde un button, si se le dan click se ejecuta la funcition 'saludar' y envia la alert
function saludar(){
    alert("Hola, te estoy saludando desde mi web")
}

const botonSaludar = document.getElementById("botonSaludo")
botonSaludar.addEventListener('click', saludar);


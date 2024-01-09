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



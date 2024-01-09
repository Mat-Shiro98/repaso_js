// Función asincronica para realizar una solicitud HTTPs y obtener datos en formato JSON.

async function obtenerDatosJson(url){
    try{
        const respuesta = await fetch (url);
        const datosJson = await respuesta.json();
        return datosJson;
    }
    catch(error){
        console.log("Error al obtener los datos", error);
        return null
    }
}

// Uso de la función asincrónica para mostrar datos Json en la consola

async function mostrarDatosJsonEnConsola(){
    const url = 'https://jsonplaceholder.typicode.com/posts/2'

    const datosJson = await obtenerDatosJson(url);

    if(datosJson){
        console.log('Datos obtenidos')
        console.log(datosJson)
    }
}

mostrarDatosJsonEnConsola();

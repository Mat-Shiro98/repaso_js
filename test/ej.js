//Enunciado: 
// Escribe una función llamada  contarVocales que reciba una 
// cadena de texto como parámetro y devuelva la cantidad de vocales 
// (a, e, i, o, u) presentes en esa cadena.


// function contarVocales(texto){
//     if(texto){
//         let contador = 0;
//         for(let i = 0; i < texto.length; i++ ){

//             let caracterActual = texto[i].toLowerCase();

//             if(caracterActual === 'a' || caracterActual === 'e' ||caracterActual === 'i' || caracterActual === 'o' || caracterActual === 'u'){
//                 contador++;
//             }
//         }
//         console.log(contador);
//     }else{
//         console.log("Error ingresar texto")
//     }
// }

// const cadenaTexto = 'Esto es un texto de prueba';
// contarVocales(cadenaTexto);

//---------------------------------------------------------------------------------

// Enunciado 2:
// Tienes que decirle al usuario que agregue nombre y mail en el formulario
// Y que muestre en pantalla lo que cargo




// fetch('https://pokeapi.co/api/v2/pokemon/ditto')
// .then(response => response.json())
// .then(data => {
//     console.log(data)})
//     .catch((error) =>{
//         console.error('error:', error)
// });


function obtenerInformacionPokemon(numeroPokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${numeroPokemon}/`;

    // Hacer la solicitud a la API usando fetch
    fetch(url)
        .then(response => {
            // Verificar si la solicitud fue exitosa (código 200)
            if (!response.ok) {
                throw new Error(`Error al obtener datos del Pokémon ${numeroPokemon}. Código de estado: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Procesar los datos según tus necesidades
            const nombrePokemon = data.name;
            const tiposPokemon = data.types.map(tipo => tipo.type.name);

            // Imprimir información (o realizar otras acciones)
            console.log(`Nombre: ${nombrePokemon}`);
            console.log(`Tipos: ${tiposPokemon.join(', ')}`);
        })
        .catch(error => {
            console.error(error);
        });
}

// Ejemplo de uso
obtenerInformacionPokemon(25); // Obtener información del Pikachu (cambiar el número según el Pokémon deseado)



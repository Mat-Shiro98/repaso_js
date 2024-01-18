
//1. Objetos y JSON

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad: "Buenos Aires"
}


persona.edad = 26;
// console.log(persona.edad)
persona.profesion = "Ingeniero"
// console.log(persona);
delete persona.ciudad;
// console.log(persona.ciudad);



// Crea un array de las propiedades
const propiedades = Object.keys(persona)
// console.log(propiedades)

// Crear un array de los Valores de las propiedades
const valores = Object.values(persona)
// console.log(valores)

// Crea una copia del objeto artificial sin tocar el codigo original
// Con esto podes crear muchas copias sin crear el objeto de nuevo y solo tendrias q cambiar los valores que necesitas
const otraPersona = {...persona};
otraPersona.edad = 700;
// console.log(otraPersona)




//2. Objetos JSON
let jsonPersona = '{"nombre": "Juan", "apellido": "Perez", "edad": 25, "ciudad": "Buenos Aires"}';
console.log(jsonPersona("nombre"))


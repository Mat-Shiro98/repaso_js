// Objetos en JS
let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad: "Buenos Aires"
}

// console.log(persona.nombre)

persona.edad = 26;
// console.log(persona.edad)

persona.profesion = "Ingeniero"
// console.log(persona);

delete persona.ciudad;
// console.log(persona.ciudad);

const propiedades = Object.keys(persona)
// console.log(propiedades)

const valores = Object.values(persona)
// console.log(valores)

const otraPersona = {...persona};
// console.log(otraPersona)

for (let clave in persona){
    // console.log(clave + ": " + persona[clave])
}

let {nombre, apellido, edad, ciudad} = persona;

// console.log(nombre)

// --------------------------------------------

// Objetos JSON
let jsonPersona = '{"nombre": "Juan", "apellido": "Perez", "edad": 25, "ciudad": "Buenos Aires"}';

// let persona = JSON.parse(jsonPersona)
// console.log(persona1)

let person = {nombre: "Lucas", edad: 35};
let jsonPerson = JSON.stringify(person)
// console.log(jsonPerson)}

// function suma (num1, num2){
//     return num1 + num2
// }

let suma = (num1, num2) =>{
    return num1 + num2
}

let resta = (num1, num2) =>{
    return num1 - num2
}

let multiplicar = (num1, num2) =>{
    return num1 * num2
}

function calculadora (num1, num2, callback){
    const resultado = callback(num1, num2)
    return resultado
}

// console.log(calculadora(4, 2, multiplicar))

// -------------------------------------
// Función constructora
function Persona(nombre, appelido, edad, ciudad){
    this.nombre = nombre;
    this.appelido = appelido;
    this.edad = edad;
    this.ciudad = ciudad;
}

// const perso1 = new Persona("Lucas", "Montoby", 30, "Buenos Aires");
// const perso2 = new Persona("María", "Goméz", 35, "Buenos Aires")

// console.log(perso1)
// console.log(perso2);

function hacerAlgo(resultado){
    return new Promise((resolve, reject) =>{
        setTimeout(( )=>{
            if(resultado) {
                resolve("Operación exitosa")
            } else{
                reject("Error en la operación")
            }
        }, 4000)
    })
};

// hacerAlgo(true)
//     .then((mensaje) => {console.log(mensaje)})
//     .catch((error) =>{
//         console.error(error)
//     });

// -----------------------------------------


fetch('https://pokeapi.co/api/v2/pokemon/2')
.then(response => response.json())
.then(data => {
    console.log(data)})
    .catch((error) =>{
        console.error('error:', error)
    });
function sumar(num1, num2){
    return num1 + num2
}

const resultadoSuma = sumar(5, 3)
// console.log(resultadoSuma)

// const sumar = (num1, num2) => num1 + num2

function esPar(numero){
    return numero % 2 === 0
}

const numero1 = 10
const numero2 = 7

// console.log(esPar(numero1))
// console.log(esPar(numero2))

function saludar(nombre){
    return "Hola, " + nombre + "!"
}

// console.log(saludar("Juan"))

// const nombreUsuario = "Lucas"
// console.log(saludar(nombreUsuario))

// --------------------------------

// Scoupe local y global

function sumaLocal(num1, num2){
    let resultado = num1 + num2
    let mensaje = "El resultado de la suma es: " + resultado
    return mensaje
}

// console.log(sumaLocal(4, 2))


let resultadoGlobal = 0 

function sumaGlobal(num1, num2){
    resultadoGlobal = num1 + num2
}

sumaGlobal(4, 2)
// console.log(resultadoGlobal)

for (let i = 1; i <= 5; i++){
    // console.log(i)
}

let contador = 0

while(contador < 1){
    // console.log(contador)
    contador--
}


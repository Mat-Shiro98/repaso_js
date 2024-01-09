function saludar(){
    alert("Hola, te estoy saludando desde mi web")
}

const botonSaludar = document.getElementById("botonSaludo")

botonSaludar.addEventListener('click', saludar);

// Registro

const formularioRegistro = document.getElementById('formularioRegistro');

// Con esto puedes enviar los datos q cargas 
formularioRegistro.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#nombre").value;
    let email = document.querySelector("#email").value;
    
    const usuario = {nombre,email};
    localStorage.setItem("usuario", JSON.stringify(usuario))

    window.location.href = "perfil.html"
})
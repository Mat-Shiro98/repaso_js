//Perfil

const datosUsuario = document.getElementById("datosUsuario");

const usuarioGuardado = localStorage.getItem("usuario");


if(usuarioGuardado){
    const usuario = JSON.parse(usuarioGuardado)
    datosUsuario.innerHTML = `
        <p>Nombre:${usuario.nombre}</p>
        <p>Email:${usuario.email}</p>
    `
}else{
    datosUsuario.innerHTML = "No hay datos"
}
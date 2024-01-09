let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    ciudad: "Buenos Aires"
}

const infoPersona = document.getElementById("infoPersona")

const personaHTML = `
<p>Nombre: ${persona.nombre}</p>
<p>Apellido: ${persona.apellido}</p>
<p>Edad: ${persona.edad}</p>
<p>Ciudad: ${persona.ciudad}</p>
`

infoPersona.innerHTML = personaHTML;
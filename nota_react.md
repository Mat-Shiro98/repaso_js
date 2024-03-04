# Install
> npx create-react-app proyecto     //Donde dice 'proyecto' es donde se crea la carpeta y se crear el React

# NPM
> npm install -g npm                // Tener instalado el NPM

# Iniciar react
> Con el comando 'npm start' dentro del proyecto creado se ejecuta

---------------------------------------------

# Crear componentes
> Se crea un archivo JS en una carpeta componente dentro de la carpeta src y se completa con el Ejemplo de abajo

import React from "react";

const MiComponente = () => {
    
    let nombre = "Pepe";
    let web = "Pepe.com";
    
    let usuario = {
        nombres: "Papuch",
        nivel: 20
    };

    return (
        <div className="MiComponente">
            <hr />
            <h2>Componente Creado</h2>
            <ul>
                <li>Lista 1</li>
                <li>Lista 2</li>
                <li>Lista 3</li>
                <li>Lista 4</li>
                <li>Nombre: <strong>{nombre}</strong></li>
                <li>Web: <strong>{web}</strong></li>

                <li>usuario = {usuario.nombres} </li>
                <li>nivel = {usuario.nivel} </li>
            </ul>
        </div>
    );
}

export default MiComponente

# Vincular componente
> En la carpeta de src en la App.js se agrega lo siguiente 
> En cualquier parte del return se agrega lo siguente

    <MiComponente/>

> Esto permite mostrar el contenido de MiComponente que cree, usando el mismo nombre del js 


# Atajo para completar el componente
> usando el atajo "rafc" completa la extructura del componente por default

import React from 'react'

export const SegundoComponente = () => {
  return (
    <div>SegundoComponente</div>
  )
}


# Props
> Este elemento sirve para obtener datos del componente padre 

function App() {

    const ficha_medica={
        altura: "180 cm",
        tipo_de_sangre: "A+",
        estado: "Bueno",
        alergia: "Ninguna"
    }

  return (
    <div className="App">
      <header className="App-header">

      <TercerComponente
        nombre = "Matt"
        apellido = "Shiro"
        ficha = {ficha_medica}
      />
      <SegundoComponente/>
      <MiComponente/>

      </header>
    </div>
  );
}

> Y desde el otro componente usamos la Desestructuración para que sea más fácil de traer los datos

const TercerComponente = ({nombre, apellido,ficha}) => {
  return (
    <div className='tercerComponente'>
        <h1>TercerComponente</h1> 
        <ul>
          <li>{nombre}</li>
          <li>{apellido}</li>
          <li>{ficha.tipo_de_sangre}</li>
          <li>{ficha.estado}</li>
        </ul>
        </div>
  )
}


# PropTypes y defaultProps

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


import React from 'react'

const otroComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("has dado click al boton!! " + nombre);
    }

    const hasDadoDobleClick = () => {
        alert("Has dado Doble Click!!")
    }

    const hasEntrado = (e,action) =>{
        console.log(`Has ${action} a la caja`);
    }

    return (
        <div className='otroComponente'>
            <h1>Evento Componente</h1>

            <p>
                <button onClick={e => hasDadoClick(e, "Victor")}>Dame Click!</button>
            </p>

            <p>
                <button onDoubleClick={hasDadoDobleClick}>Dame Doble Click!</button>
            </p>

            <div id="caja"
                onMouseEnter={ e => hasEntrado(e,"entrado")}
                onMouseLeave={ e => hasEntrado(e,"salido")}
            >
                <p>Estoy dentro de la caja</p>
            </div>

        </div>
    )
}

export default otroComponente;
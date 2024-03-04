import React from 'react'

const otroComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert("has dado click al boton!! " + nombre);
    }

    return (
        <div className='otroComponente'>
            <h1>Evento Componente</h1>

            <button onClick={e => hasDadoClick(e,"Victor")}>Dame Click!</button>

        </div>
    )
}

export default otroComponente;
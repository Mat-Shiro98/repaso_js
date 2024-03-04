import React from 'react'

const SegundoComponente = () => {

  const libros = ["Harry Potter", "Juegos de tronos", "Clean Code"];
  const jefes = [];

  return (
    <div className='libros'>
      <h1>SegundoComponente</h1>
      <h2>Listado de libros</h2>
      <ul>
        {
          libros.map((libros, indice) => {
            return <li key={indice}> {libros}</li>
          })
        }
      </ul>

      <h2>Listado de jefes de DS</h2>

      {jefes.length >= 1 ? 
      (<ul>
        {
          jefes.map((jefes, ds) => {
            return <li key={ds}> {jefes}</li>
          })
        }
      </ul>) : (
        <p>No existen Jefes de Dark Souls</p>
      )}

    </div>

  )
}

export default SegundoComponente;
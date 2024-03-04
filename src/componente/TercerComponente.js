import React from 'react'

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

export default TercerComponente;

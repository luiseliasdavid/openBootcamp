import React from 'react'

export default function Ejemplos4(props) {
  return (
    <div>
    
   <h1>
   ejemplo de childrens en props
   </h1>
   <h2>
    nombre: {props.nombre}
   </h2>
     <h1> {props.children}</h1>
    </div>
  )
}

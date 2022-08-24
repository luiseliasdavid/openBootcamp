import React, {useState} from 'react'
import Child from '../pure/forms/child'

export default function Father() {
    const [name,setName]= useState('Luis')

function showMessage (text){
    alert(`message recived ${text}`)
}
function updateName(newName) {
   setName(newName)
}

  return (
    <div style={{background:'tomato', padding:'30px'}}>
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}

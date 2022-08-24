import React, {useRef} from 'react'

export default function Child({name, send, update}) {
  
    const messageRef= useRef('')
    const nameRef= useRef('')


    function pulsarBoton(){
        const text= messageRef.current.value;
        alert(`text: ${text}`)

    }
    
    function pressButtomParams(text){
        alert(`text: ${text}`)
    }

    function submitName (e){
        e.preventDefault()
        update(nameRef.current.value)
    }

  return (
    <div>
      <p onMouseOver={()=> console.log('on mouse over')}>hello, {name}</p>
      <button onClick={()=> console.log('boton 1 pulsado')}>
        boton 1
      </button>
      <button onClick={()=>pulsarBoton()}>
        boton 2
      </button>
      <button onClick={()=>{pressButtomParams('hello')}}>
        boton 3
      </button>
      <input
       placeholder='insert text' 
       onFocus={()=>console.log('input focused')}
       onChange={(e)=>console.log('input changed', e.target.value)}
       onCopy={()=>console.log('copy text from input')}
       
       ref={messageRef}
       ></input>
      <button onClick={()=>send(messageRef.current.value)}>
        Send Message
      </button>
      <div style={{marginTop:'20px'}}>
          <form onSubmit={submitName}> 
          <input ref={nameRef} placeholder='New Name'></input>
          <button type='submit'> update nmae</button>

          

          </form>
      </div>
    </div>
  )
}

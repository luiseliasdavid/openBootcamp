import { useState, useEffect } from "react"


export default function Clock() {
    
    const [fecha,setFecha] = useState({
        fecha: new Date(),
        edad:0,
        nombre:'luis',
        apellidos:'david'
    })
    
    
    useEffect(()=>{
           function tick (){
             setFecha({
                ...fecha,
                edad: fecha.edad +1,
                fecha: new Date()
             });
              }
           function actualizar (){
               setFecha({
                   ...fecha,
                   timerID: setInterval (
                       () => tick(), 1000
                    )
               })
           }
           
   actualizar()
   return ()=>{
    clearInterval (fecha.timerID)
   }
 },[])


 return (
    <div>
    <h2>
    Hora Actual:
    {fecha.fecha.toLocaleTimeString()}
    </h2>
    <h3>{fecha.nombre} {fecha.apellidos}</h3>
    <h1>Edad: {fecha.edad}</h1>
    </div>
 )
}



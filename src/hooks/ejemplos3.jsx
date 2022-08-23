import React ,{useState,useContext} from 'react'

const miContexto= React.createContext(null);

const Componente1 = () => {

    const state = useContext(miContexto)

    return (
        <div>
            <h1>
            el token es : {state.token} 
            </h1>
            <Componente2></Componente2>

        </div>
    );
}



const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>
                la sesion es: {state.sesion}
            </h2>
        </div>
    );
}



export default function MiComponenteConContexto() {

    const estadoInicial= {
      token:'12345667',
      sesion: 1
      }

    const [sessionData,setSessionData]= useState(estadoInicial)

    function actualizarSesion() {
        setSessionData(
            {
            token:'kjghjwhjkdwkjd',
            sesion: sessionData.sesion + 1
              }
        )
    }

  return (
    <miContexto.Provider value={sessionData}>
    <h1>ejemplo de use state y use contexto</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}></button>
    </miContexto.Provider>
  )
}







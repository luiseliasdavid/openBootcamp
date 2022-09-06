import React, {useState,useEffect} from 'react'
import {getRandomJoke} from '../../../services/axios-service'

function AxiosExample() {
  const [joke, setJoke] = useState(null)
  //console.log(joke)
  /* useEffect(()=>{
    obteinUser()
},[]) */

const obteinJoke= ()=>{
getRandomJoke()
.then((response)=>{
    if (response.status===200){
        setJoke(response.data.value)
    }
    //console.log(response.data.value)
})
.catch((error)=>{
    alert(`Something went wrong ${error}`)
})
}
return (
    <div>
      <h1>Axios Examples</h1> 
      {
        joke?
         (<div>
        {/*  <img alt='avatar' src={user.picture.large}></img> */}
         <h2>Chuck norris joke:</h2>
            <h3> {joke} </h3>

          </div> )
         :
          ( 
            <div>
            <h2> Generate a new Joke </h2>
           <button  onClick={obteinJoke}>generate a new joke</button>
          </div>
           )
      }
    </div>
  )
}

export default AxiosExample

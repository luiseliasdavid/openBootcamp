import React, {useState,useEffect} from 'react'
import {getRandomUser} from '../../../services/axios-service'

function AxiosExample() {
  const [user, setUser] = useState(null)
  console.log(user)
  /* useEffect(()=>{
    obteinUser()
},[]) */

const obteinUser= ()=>{
getRandomUser()
.then((response)=>{
    if (response.status===200){
        setUser(response.data.results)
    }
    //console.log(response)
})
.catch((error)=>{
    alert(`Something went wrong ${error}`)
})
}
return (
    <div>
      <h1>Axios Examples</h1> 
      {
        user?
         (<div>
        {/*  <img alt='avatar' src={user.picture.large}></img> */}
         <h2>{user[0].name.title} {user[0].name.first} {user[0].name.last} </h2>
            <h3> {user[0].email} </h3>

          </div> )
         :
          ( 
            <div>
            <h2> Generate a new user </h2>
           <button  onClick={obteinUser}>generate a new user</button>
          </div>
           )
      }
    </div>
  )
}

export default AxiosExample

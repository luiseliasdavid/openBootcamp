import React from 'react'
import RegisterFormik from '../../components/pure/forms/registerFormik'
import {useNavigate} from 'react-router-dom'


function Register() {
 const navigate= useNavigate()

 const toLogin = ()=>{
  navigate('/login')
}

  return (
    <div>
      <h1>register page</h1>
      <RegisterFormik/>
      <p>do you have account?</p>
      <button onClick={toLogin} >Login</button>
    </div>
  )
}

export default Register

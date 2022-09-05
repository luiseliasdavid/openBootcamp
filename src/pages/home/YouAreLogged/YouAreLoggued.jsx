
import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function YouAreLogged() {
  
  const navigate= useNavigate()
  useEffect(() => {
    alert('You are logged. Redirecting to home')
    navigate('/')
}, []);

  return (
    null
  )
}

export default YouAreLogged
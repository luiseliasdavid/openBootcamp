import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function MustBeLogged() {
  
  const navigate= useNavigate()
  useEffect(() => {
    alert('must be logged,redirecting to login...')
    navigate('/login')
}, []);

  return (
    null
  )
}


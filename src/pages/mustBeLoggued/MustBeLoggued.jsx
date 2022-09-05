import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function MustBeLoggued() {
  
  const navigate= useNavigate()
  useEffect(() => {
    alert('must be logged,redirecting to login...')
    navigate('/login')
}, []);

  return (
    null
  )
}

export default MustBeLoggued

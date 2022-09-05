import React from 'react'
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyrigth';
import { useNavigate } from 'react-router-dom'


function DashBoard() {

  const navigate= useNavigate()

const logout= ()=>{
  navigate('/login')
}


  return (
    <div>
      <Button variant="contained" onClick={logout}>logout</Button>
      <Copyright></Copyright>
    </div>
  )
}

export default DashBoard

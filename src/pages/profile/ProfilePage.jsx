import React from 'react'
import {useNavigate} from 'react-router-dom'
function ProfilePage() {
    const navigate= useNavigate()

  return (
    <div>
      <h1>your profile</h1>
      <button onClick={()=>navigate(-1)}>
            Go back
        </button>
      <button onClick={()=>navigate('/tasks')}>
            Go your tasks
        </button>
    </div>
  )
}

export default ProfilePage


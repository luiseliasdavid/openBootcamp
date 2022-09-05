import React from 'react'
import {useNavigate} from 'react-router-dom'


function AboutPage() {

    
    
    const navigate= useNavigate()

    

    
  return (
    <div>
      <h1>
        About | Faqs page
      </h1>
      <div>
        <button onClick={()=>navigate('/')}>
            Go to home
        </button>
        <button onClick={()=>navigate(-1)}>
            Go back
        </button>
        <button onClick={()=>navigate(1)}>
            Go forward
        </button>
      </div>
    </div>
  )
}

export default AboutPage

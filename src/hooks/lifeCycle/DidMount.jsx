

import React, { Component } from 'react'
import { useEffect } from 'react';
export  class DidMount extends Component {
  
    componentDidMount(){
    console.log('comportamiento antes de que sea añadido al DOM (rederize) ');
   }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}



export  function DidMountHook() {

useEffect(() => {
   console.log('comportamiento antes de que el componente sea añadido al dom')
}, []);


  return (
    <div>
      
    </div>
  )
}


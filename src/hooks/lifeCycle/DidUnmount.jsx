

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

componentWillUnmount(){
    console.log('comportamiento cuando se desmonta el componente')
}

    render() {
        return (
            <div>
                <h1>Will unmount</h1>
            </div>
        );
    }
}



export  function WillUnmountHook() {

useEffect(() => {
    return() =>{
   console.log('copmportamiento cuando se desmonta')}
},[]);


  return (
    <div>
        <h1>Will unmount</h1>
    </div>
  )
}


import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

componentDidUpdate(){
    console.log('comportamiento cuando se actualiza el componente')
}

    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}



export  function DidUpdateHook() {

useEffect(() => {
   console.log('copmportamiento cuando se reciven nuevas props o cambia un estado')
});


  return (
    <div>
        <h1>DidUpdate</h1>
    </div>
  )
}




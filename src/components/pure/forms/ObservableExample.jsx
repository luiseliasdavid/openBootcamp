import React, { useState } from 'react'
import { getNumbers } from "../../../services/observableServise";


function ObservableExample() {

const [number,setNumber] = useState(0)

const obtainNewNumber = () => {
    console.log('subcription to observable')
    getNumbers.subscribe(
        {
            next(newNumber){
                console.log('new number: ',newNumber )
                setNumber(newNumber)
            },
            error(error) {
                alert(`Subcribe went wrong: ${error}`)
                console.log(`error is obeservable: ${error}`)
            },
            complete(){
                alert(`finished with: ${number}`)
                console.log(`done with Observable`)
            }
        }
    )
   
}

  return (
    <div>
        <h1>Number: {number} </h1>
        <button onClick={obtainNewNumber} >
            obtein new numbers
        </button>
    </div>
  )
}

export default ObservableExample

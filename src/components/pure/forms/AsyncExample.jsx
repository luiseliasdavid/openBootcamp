import React from 'react'

function AsyncExample() {

    async function generateNumber() {
        return 1; 
    }

    async function generatePromiseNumber(){
        return Promise.resolve(2)
    }

    function obteinNumber() {
        generateNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch ((error)=> alert(`Something went wrong: ${error}`))
    }
    function obteinPromiseNumber() {
        generatePromiseNumber()
        .then((response) => alert(`Response: ${response}`))
        .catch((error)=> alert(`something go wrong: ${error}`))
    }

    async function saveSessionStorage(key,value) {
         await sessionStorage.setItem(key, value)
         return Promise.resolve(sessionStorage.getItem(key))
    }
    function showStorage(){
        saveSessionStorage('name','Luis')
        .then((response)=> {
            let value= response;
            alert(`Saved name: ${value}`)
        })
        .catch((error)=> {alert(`Something go wrong : ${error}`)
        })
        .finally(() => alert(`Name saved and recived`))

    }

    async function obteinMessage (){
        let promise= new Promise((resolve,reject) => {
            setTimeout(()=> {
               resolve('hello World')
            },2000)
        })

        let message= await promise;
        await alert(`Message received fseesfse: ${message}`)


    }

    const returnError = async()=> {
       await Promise.reject(new Error('Ooops!'))

    }

    const consumeError = ()=>{
        returnError()
        .then ((response) => alert(`evethin is ok ${response}`))
        .catch((error)=>{alert(`something go wrong: ${error}`)})
        .finally(()=> alert(`Finally Executed`))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://invalidURL.com')
            alert(`Response ${JSON.stringify(response)}`)
        }
        catch (error) {
            alert(`something go wrong: ${error}`)
        }
    }

    const multipromise= async()=>{
        let results= await Promise.all(
        [
            fetch('https://reqres.in/api/users'),
            fetch('https://reqres.in/api/users?page=2')
        ]

        )
        .catch((error)=> alert(`something went wrong with your URLs: : ${error}`))

    }

  return (
    <div>
      <button onClick={obteinNumber}>obtein number</button>
      <button onClick={obteinPromiseNumber} >obtein promise number</button>
      <button onClick={showStorage} >Save Name and Show</button>
      <button onClick={obteinMessage}>Send message to 2 seconds</button>
      <button onClick={consumeError}>obtein error</button>
      <button onClick={urlNotFound}>Request unknow url</button>

    </div>
  )
}

export default AsyncExample

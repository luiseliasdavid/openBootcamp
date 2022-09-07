import APIReequest, { chucknorris } from '../utils/config/axios.config'

export  function getRandomUser (){
    return APIReequest.get('/',{
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
})
}




export function getRandomJoke (){
    return chucknorris.get('/',{
        validateStatus: function (status) {
            return status < 500; // Resolve only if the status code is less than 500
          }  
    })
}
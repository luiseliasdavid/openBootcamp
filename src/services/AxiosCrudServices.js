import axios from 'axios'

/**
 * login method to reqres endpoint
 * @param {string} email 
 * @param {string} password 
 */

export const  login = (email,password)=>{

    let body= {        
            email: "eve.holt@reqres.in",
            password: "cityslicka"
            }
  return axios.post('https://reqres.in/api/login', body
  
  )
}

//TODO Obtein all users
export const getAllUsers= ()=>{
    return axios.get(`https://reqres.in/api/users`)
}
//TODO obtein al paged users
export const getAllPageUsers= (page)=>{
    return axios.get(`https://reqres.in/api/users?page=${page}`)
}

//TODO Obtein user by ID
export const getUserById= (id)=>{
    return axios.get(`https://reqres.in/api/users/${id}`)
}

//TODO Create User
export const createUser = (userName, job)=>{
    let body= {        
        name: userName,
        job: job
        }
return axios.post('https://reqres.in/api/users', body)
}


//TODO update User
export const updateUser = (id, userName, job)=>{
    let body= {        
        name: userName,
        job: job
        }
return axios.post(`https://reqres.in/api/users/${id}`, body)
}

//TODO Delete user
export const deleteUserById= (id)=>{
    return axios.delete(`https://reqres.in/api/users/${id}`)
}
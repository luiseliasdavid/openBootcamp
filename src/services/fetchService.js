

export const getAllUsers = async ()=>{
    let response= await fetch('https://reqres.in/api/users')
    //we return the json
    //console.log(`Response: `, response)

    return response.json()
    /* return response.json()
 */
}
export const getAllPageUsers = async (page)=>{
    let response= await fetch(`https://reqres.in/api/users?page=${page}`)
    //we return the json
    //console.log(`Response: `, response)

    return response.json()
    /* return response.json()
 */
}
export const getUsersDetail = async (id)=>{
    let response= await fetch(`https://reqres.in/api/users/${id}`)

    //we return the json
    //console.log(`Response: `, response)

    return response.json()
    /* return response.json()
 */
}

export const login = async (email , password) =>{
    let body = {
        email: email,
        password: password
    }
    let response = await fetch('https://reqres.in/api/login',{
        method:'POST',
        // mode: 'no-cors',
       // credencials: 'omit',
        //cache:'no-cache',
       // headers: {'Content-type': 'application/json'},
        body: body,
    });
    return response.json();
}
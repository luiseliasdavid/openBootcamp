import React, { useState,useEffect } from 'react';
import {getAllUsers,getAllPageUsers, getUsersDetail, login} from '../../../services/fetchService.js'

function FetchExample() {
const [users,setUsers]= useState([])
const [selectedUser, setSelectedUser]= useState(null)
const [totalUsers, setTotalUsers] = useState(12)
const [usersPerPage,setUsersPerPage]= useState(6)
const [pages,setPages]= useState(2)

useEffect(() => {
    obteinUsers()
    
}, []);

const obteinUsers= ()=>{
    getAllUsers()
    .then((response) =>{
        //console.log(`All users: `, response.data);
        setUsers(response.data);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page)
        setPages(response.total_pages)

    } )
    .catch((error)=>{
        alert(`error while retriving the users: ${error}`)
    })
    .finally(()=>{
        //console.log('ended obteining users:');
        //console.log(users)
    })
}

   const obteinPageUsers= (page)=>{
    
    getAllPageUsers(page).then((response) =>{
        //console.log(`All users: `, response.data);
        setUsers(response.data);
        setTotalUsers(response.total);
        setUsersPerPage(response.per_page)
        setPages(response.total_pages)

    } )
    .catch((error)=>{
        alert(`error while retriving the users: ${error}`)
    })
    .finally(()=>{
        console.log('ended obteining users:');
        console.log(users)
    })
   }

   const obteinUserDetail= (id)=>{
    getUsersDetail(id)
    .then((response) =>{
        //console.log(`detail user: `, response.data);
        setSelectedUser(response.data)

    } )
    .catch((error)=>{
        alert(`error while retriving the user: ${error}`)
    })
    .finally(()=>{
        //console.log('ended obteining user:');
        //console.log(selectedUser)
    })
   }

   const authUser= ()=>{
    login("eve.holt@reqres.in","cityslicka")
    .then((response) =>{
        console.log(`TOKEN: `, response.token);
        sessionStorage.setItem('token',response.token)

    } )
    .catch((error)=>{
        alert(`error while loginuser: ${error}`)
    })
    .finally(()=>{
        console.log('ended login user, Navigate to Home');
        //console.log(selectedUser)
    })
   }

  return (
    <div>
    {/* simular boton de login */}
    <button onClick={authUser}>Auth user </button>
          <h2>Users:</h2>
          {
            users.map((user,index) => (
                <p key={index} onClick={()=>obteinUserDetail(user.id)}>
                {user.first_name}
                </p>)
            )
          }
          <p> Showing {usersPerPage} users of {totalUsers} in total </p>
          <button onClick={()=>obteinPageUsers(1)}>
          1
          </button>
          <button onClick={()=>obteinPageUsers(2)}>
          2
          </button>
          <h3>user details: </h3>
          { 
            selectedUser ? (
            <div>
            
            <p>name: {selectedUser.first_name}</p>
            <p>Last Name: {selectedUser.last_name} </p>
            <p>Email: {selectedUser.email} </p>
            <img alt='Avatar' src={selectedUser.avatar} style={{height: '50px', width:'50px' }} />
             </div>    )
             : <h6>please select an user to see its details</h6>
          }
    </div>
  )
}

export default FetchExample


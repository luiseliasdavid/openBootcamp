
import React from 'react'
import { createUser, deleteUserById, getAllPageUsers, getAllUsers, getUserById, login, updateUser } from '../../../services/AxiosCrudServices'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

function AxiosCRUDExample() {
    
    const inicialCredencials= {
     email: '',
     password: ''
    }

    const loginSchema= yup.object().shape(
        {
            email: yup.string()
                .email('Invalid email format')
                .required('email is required'),
            password: yup.string()
                .required('Password is required')

        }
    )

   const authUser= (values)=>{
    login(values.email,values.password)
    .then((response)=>{
        if(response.data.token){
        alert(JSON.stringify(response.data.token))
        sessionStorage.setItem('token', response.data.token)
    } else {
        sessionStorage.removeItem('token');
        throw new Error ('Login failure')
    }
    })
    .catch((error)=> {
        alert('somethimg go wrong ', error);
        sessionStorage.setItem('token')
    })

    .finally(()=> console.log('login done'))
   }
  
   //Crud examples
   const obteinAllUsers= ()=>{
      getAllUsers()
        .then((response)=>{
            alert(JSON.stringify(response.data.data))
        })
        .catch((error)=>alert(`something go wrong ${error}`))
   }
   const obteinAllPagedUsers= (page)=>{
      getAllPageUsers(page)
      .then((response)=>{
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error("User not found");
        }
    })
        .catch((error)=>alert(`something go wrong ${error}`))
   }

   const obteinUserById = (id)=>{
      getUserById(id)
      .then((response)=>{
        alert(JSON.stringify(response.data.data))
    })
    .catch((error)=>alert(`something go wrong ${error}`))
   }

   const createOneUser = (userName, job) => {
     createUser(userName, job)
       .then((response) => {
         if (response.data && response.status === 201) {
           alert(JSON.stringify(response.data));
         } else {
           throw new Error("User not created");
         }
       })
       .catch((error) => {
         alert(`somethimg went wrong , ${error}`);
       });
   };

   const upUserById = (id, userName, job)=>{
    updateUser(id, userName, job)
    .then((response)=>{
      alert(JSON.stringify('succes update',response.data))
  })
  .catch((error)=>alert(`user not updated ${error}`))
 }

 const delUserById = (id)=>{
  deleteUserById(id)
  .then((response)=>{
    alert(JSON.stringify('succesfull delete',response.data))
})
.catch((error)=>alert(`something go wrong ${error}`))
}



  return (
    <div>
      <button onClick={authUser}>
        login
      </button>
      <Formik
        //**initial values */
        initialValues={inicialCredencials}
        //***yup validation schema */
        validationSchema={loginSchema}
        //** onsubmit event */
        onSubmit={async(values)=>
            authUser(values)
        }
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" placeholder="email" />
            {errors.email && touched.email && 
            (
              
              <ErrorMessage name='email' component='div'></ErrorMessage>
             
            )
            }

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="password"
            />
            {errors.password && touched.password && (
              
              <ErrorMessage name='password' component='div'></ErrorMessage>
              
            )}

            <button type="submit">Submit</button>
            {isSubmitting ? <p>login your credencials</p> : null}
          </Form>
        )}
      </Formik>
      {/* example buttons to test api responses*/}
      <div>
        <button onClick={obteinAllUsers}>
            get all users
        </button>
        <button onClick={()=>obteinAllPagedUsers(1)}>
            get page 1
        </button>
        <button onClick={()=>obteinUserById(1)}>
            get user 1
        </button>
        <button onClick={()=>createOneUser('morpheus','leader')}>
            create user
        </button>
        <button onClick={()=>upUserById('morpheus','developer')}>
            update user
        </button>
        <button onClick={()=>delUserById(1)}>
            delete user
        </button>
      </div>

    </div>
  )
}



export default AxiosCRUDExample

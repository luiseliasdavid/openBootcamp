import React from 'react'
import { ROLES } from '../../../models/roles.enum'
import {User, user} from '../../../models/user.class'
import * as Yup from 'yup'
import { Formik, Form,Field,ErrorMessage } from 'formik'



function RegisterFormik() {
    
    let user= new User()

    const initialValues= {
        userName:'',
        email:'',
        password:'',
        confirm:'',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(

        {
            userName: Yup.string()
                .min(6,'userName must have 6 characters at least')
                .max(12, 'userName must have lees than 12 characters')
                .required('userName is required'),
            email: Yup.string()
                 .email('Invalid mail format')
                 .required('email is required'),
            role: Yup.string().oneOf([ROLES.USER,ROLES.ADMIN],'you must select a role')
                .required('role is required'),
            password: Yup.string()
                .min(8,'passwor must have 8 characters')
                .required('pasword is required'),
            confirm: Yup.string()
            .when('password', {
                is: value=> (value && value.length>0 ? true:false),
                then: Yup.string().oneOf(
                    [Yup.ref("password")],
                    'Pasword must match!'
                    )
                }).required('you must confirm the password')
            }
            );
         const submit=(values)=> {   
            alert('register user')
            }
            return (
    <div>
      <h1>Register Formik</h1>
      <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={async (values)=>{
        await new Promise((r)=>setTimeout(r,1000));
        alert(JSON.stringify(values,null,2))
      }}
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
            <label htmlFor="userName">User name:</label>
            <Field id="useName" type="userName" name="userName" placeholder="userName" />
            {errors.userName && touched.userName && 
            (
              
              <ErrorMessage name='userName' component='div'></ErrorMessage>
             
            )
            }
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
            <label htmlFor="confirm">Confirm Password</label>
            <Field
              id="confirm"
              type="confirm"
              name="confirm"
              placeholder="confirm password"
            />
            {errors.confirm && touched.confirm && (
              
              <ErrorMessage name='confirm' component='div'></ErrorMessage>
              
            )}

            <button type="submit">Register user</button>
            {isSubmitting ? <p>Sending your credencials</p> : null}

            </Form>
        ) }

      </Formik>

    </div>
  )
}

export default RegisterFormik

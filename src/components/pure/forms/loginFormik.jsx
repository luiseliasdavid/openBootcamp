import React from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {useNavigate} from 'react-router-dom'

function LoginFormik() {

  const navigate= useNavigate()

    const loginSchema= yup.object().shape(
        {
            email: yup.string()
                .email('Invalid email format')
                .required('email is required'),
            password: yup.string()
                .required('Password is required')

        }
    )

    const inicialCredencials= {
        email: '',
        password: ''
    }

const toRegister = ()=>{
  navigate('/register')
}
  return (
    <div>
      <h4>Login Formik</h4>
      <Formik
        //**initial values */
        initialValues={inicialCredencials}
        //***yup validation schema */
        validationSchema={loginSchema}
        //** onsubmit event */
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          alert(JSON.stringify(values, null, 2));
          //we save data in local storage
          localStorage.setItem("credencials", values);
          window.location.reload(true)
          
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
         <br/>
        <p>do you haven't account ?</p><button onClick={toRegister} >Register</button>
    </div>
  );
}

export default LoginFormik

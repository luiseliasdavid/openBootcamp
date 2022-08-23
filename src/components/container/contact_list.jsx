import React,{useState, useEffect} from 'react';

import { Contacto } from '../../models/contacto.class'; 
import { CONECTADO } from '../../models/conectado';
import ContactoComponent from '../pure/contacto'
import ContactForm from '../pure/forms/contactForm';

 const ContactListComponent = () => {
     
     const defaultContact1 = new Contacto('Luis1' , 'David' , 'hola@gmail.com' , CONECTADO.TRUE)
     const defaultContact2 = new Contacto('Luis2' , 'David' , 'ho5g5la@gmail.com' , CONECTADO.FALSE)
     const defaultContact3 = new Contacto('Luis3' , 'David' , 'hoegela@gmail.com' , CONECTADO.TRUE)


     





     const [contact, setContact] = useState([defaultContact1,defaultContact2,defaultContact3]);
     const [isLoadin,setIsLoading]= useState(true)

     useEffect(() => {

       // console.log('contacto ha sido modificado')
         setIsLoading(false)
        return () => {
       //     console.log('this component is goin to unmount')
        };
     }, [contact]);


    return (
      <div className="col-12">
        <div className="card">
          {/* card header */}
          <div className="card-header p-3">
            <h5>tus contactos:</h5>
          </div>
          {/* car body */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: "relative", height: "400px" }}
          >
            <table>
              <thead>
                <tr>
                  <th scope="col"> Nombre </th>
                  <th scope="col"> Apellido </th>
                  <th scope="col"> Email </th>
                  <th scope="col"> Conectado </th>
                </tr>
              </thead>

              <tbody>
                {contact.map((cont, index) => (
                  <ContactoComponent
                    key={index}
                    contacto={cont}
                  ></ContactoComponent>
                ))}
              </tbody>
            </table>
            <div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
        <h1>yours contacts:</h1>
      </div>
    );
};

export default ContactListComponent


 

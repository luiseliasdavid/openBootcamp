import React,{useState, useEffect} from 'react';

import { Contacto } from '../../models/contacto.class'; 
import { CONECTADO } from '../../models/conectado';
import ContactoComponent from '../pure/contacto'

 const ContactListComponent = () => {
     
     const defaultContact = new Contacto('Luis' , 'David' , 'hola@gmail.com' , CONECTADO.FALSE)
     
     const [contact, setContact] = useState({defaultContact});
     const [isLoadin,setIsLoading]= useState(true)

     useEffect(() => {

        console.log('contacto ha sido modificado')
         setIsLoading(false)
        return () => {
            console.log('this component is goin to unmount')
        };
     }, [contact]);


    return (
        <div>
            <h1>yours contacts:
            <ContactoComponent contacto={defaultContact} ></ContactoComponent>
            </h1>
        </div>
    );
};

export default ContactListComponent


 

import React from 'react';

import { Contacto } from '../../models/contacto.class'; 
import { CONECTADO } from '../../models/conectado';
import ContactoComponent from '../pure/forms/contacto'

 const ContactListComponent = () => {

    const defaultContact = new Contacto('Luis' , 'David' , 'hola@gmail.com' , CONECTADO.FALSE)

    return (
        <div>
            <h1>yours contacts:
            <ContactoComponent contacto={defaultContact} ></ContactoComponent>
            </h1>
        </div>
    );
};

export default ContactListComponent


 

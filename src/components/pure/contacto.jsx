import React, {useRef,useEffect}  from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../../models/contacto.class'
import '../../styles/contacto.scss'

const ContactoComponent = ({contacto}) => {

  useEffect(()=>{
    console.log('contacto creado')
    return () => {
      console.log(`contacto:  ${contacto.name} a sido creado`)
    }
  },[contacto] )

 const estilo = {
  color:'green',
  fontWeight: 'lighter',
  textDecorationStyle: 'dotted'
 }

  return (
    <div>
      
         <h2 className='contacto'>
           Nombre:{ contacto.nombre }
         </h2>
         <h3  style={estilo}>
          Apellido: { contacto.apellido }
         </h3>
         <h4>
          Email: { contacto.email }
         </h4>
         <h5>
          Conectado: { contacto.conectado? 'Contacto En Linea' : 'Contacto No Disponible' }
         </h5>
        
      
    </div> 
  );
}

ContactoComponent.propTypes = {
  contacto: PropTypes.instanceOf(Contacto)
}

export default ContactoComponent



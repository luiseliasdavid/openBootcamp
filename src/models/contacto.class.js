
import { CONECTADO } from "./conectado";

export class Contacto  {
nombre= '';
apellido='';
email='';
conectado= CONECTADO.TRUE;

 constructor(nombre,apellido,email,conectado){
   this.nombre= nombre;
   this.apellido= apellido;
   this.email= email;
   this.conectado= conectado 
 }

}
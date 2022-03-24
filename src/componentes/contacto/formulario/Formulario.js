import React, { useState } from 'react';
import './Formulario.css'
  

export default function Formularios(){
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  const [Mensaje,setMensaje] = useState("");
  const [ciudad,setCiudad] = useState("");
  const [Servicio,setServicio] = useState("");
  const [terminos,setTerminos] = useState(false);

  const handleSubmit = e=>{
  /* e.preventDefault();sirve para que la pagina no se recarge de nuevo al presionar el boton enviar*/
    alert('El formulario se ha enviado');
  };

  

  

  

  

  return(
    
    <div className='formulario'>
      <>
    <form onSubmit={handleSubmit}>
      
      <label htmlFor='nombre' className= 'negrita'>Nombres y Apellidos :</label>
      <input type='text' className='form-control' id= 'nombre' name= 'nombre'
      value={nombre}
      onChange={(e)=>setNombre(e.target.value)}
      />
    
    
    <label htmlFor='email' className= 'negrita'>Email </label>
<input type='text' className='form-control' id= 'Email' name= 'Email'
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
<label htmlFor='mensaje' className= 'negrita'>Mensaje </label>
<input type='text' className='form-control' id= 'mensaje' name= 'mensaje'
value={Mensaje}
onChange={(e)=>setMensaje(e.target.value)}
/>

  <p>De que ciudad nos escribes</p>
  <select name='ciudad' onChange={(e)=>setCiudad(e.target.value)}defaultValue = ''>
    <option value = ''>---</option>
    <option value ='Med'>Medellin</option>
    <option value ='Bog'>Bogota</option>
    <option value ='Cal'>Cali</option>
    <option value ='Per'>Pereira</option>

  </select>
  <br>
  </br>
  
      <p>Elige el servicio que solicitas :</p>
      <input type='radio' id='backup' name='Servicio' value='backup' onChange={e=>setServicio(e.target.value)} 
      />
      <label htmlFor='backup'>Backup</label>

      <input type='radio' id='telefonia' name='Servicio' value='telefonia' onChange={e=>setServicio(e.target.value)}
     
      />
       <label htmlFor='telefonia'>Telefonia Ip</label>
       <input type='radio' id='hacking' name='Servicio' value='hacking' onChange={e=>setServicio(e.target.value)}
       
      />
      <label htmlFor='hacking'>Hacking </label>
      <input type='radio' id='redes' name='Servicio' value='redes' onChange={e=>setServicio(e.target.value)}
       
      />
      <label htmlFor='redes'>Redes</label>
      <input type='radio' id='nube' name='Servicio' value='nube' onChange={e=>setServicio(e.target.value)}
      
      />
      <label htmlFor='nube'> Nube</label>
      <input type='radio' id='cableado' name='Servicio' value='cableado' onChange={e=>setServicio(e.target.value)}
      
      />
     <label htmlFor='cableado'>Cableado </label>


    
    <label htmlfor = 'terminos'>Acepto terminos y condiciones</label>
  <input type='checkbox' id='terminos' name='terminos' onChange={(e)=>setTerminos(e.target.checked)}></input>
  <br></br>
  <br></br>
  
  <button type="submit" className="btn btn-primary btn-block" onclick="infoContacto()">Enviar</button>
    </form>
</>



    </div>
    


  

  )
}

 

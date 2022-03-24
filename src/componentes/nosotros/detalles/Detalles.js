import React from 'react';
import './Detalles.css';
 
class Detalles extends React.Component {
 
  render() {
 
    return (
        <div className='detalles'>
            <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2>Objetivo</h2>
                    <p>Contribuir a masificar el acceso a las redes y servicios de telecomunicaciones a través de la política de acceso universal permitiendo extender de manera equitativa el uso y la aplicación de las Tecnologías de Información y Comunicación </p>
                    <p><a className="btn btn-primary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Misión</h2>
                    <p>Promover el acceso equitativo a las tecnologías de información y comunicación, aumentar la competitividad del mercado y asegurar la debida protección de los usuarios de los servicios de telecomunicaciones. </p>
                    <p><a className="btn btn-primary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Visión</h2>
                    <p>Ser un servicio público de excelencia que contribuya en forma decisiva y permanente al éxito de las políticas de gobierno, en el ámbito de las tecnologías de Información y Comunicación</p>
                    <p><a className="btn btn-primary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
            </div>
 
            <hr/>
 
        </div>
 

        </div>
        
    )
    
  }
 
}

export default Detalles;
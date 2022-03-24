import React from 'react';
//import './Slider.css';
import './Servicios.css'
 
class Servicios extends React.Component {
 
  render() {
 
    return (
 
        <div className="container-servicios">
 
            <div className="row">
 
                <div className="col-lg-4">
                
                <img src={process.env.PUBLIC_URL + 'images/img3.jpg'} className="img-fluid rounded-circle w-50"></img>
                
                    
                    
                        
        
                    <h2>AWS</h2>
                    <p>Los servicios de nube son infraestructuras, plataformas o sistemas de software que alojan los proveedores externos y que se ponen a disposición de los usuarios a través de Internet. Los servicios de cloud computing son todas las infraestructuras, las plataformas, las tecnologías o los sistemas de software a los que acceden los usuarios a través de Internet sin tener que descargar software adicional</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img src={process.env.PUBLIC_URL + 'images/hack3.jpg'} className="img-fluid rounded-circle w-50 " ></img>
                    <h2>HACKING ETICO</h2>
                    <p>Este tipo de hacking analiza los sistemas informáticos corporativos y los programas con el fin de aclarar el estado de la seguridad de una empresa. Concretamente, se asume el rol de ciberdelincuente y se simulan ataques a la entidad evaluando, de esta manera, el estado real de su seguridad.</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
                <div className="col-lg-4">
                <img src={process.env.PUBLIC_URL + 'images/img2.jpg'} className="img-fluid rounded-circle w-50 " ></img> 
                    <h2>BACKUP</h2>
                    <p>copia de seguridad a mayor o menor escala. Puede ser una versión reciente de la información contenida en todos los equipos de nuestra compañía, o puede tratarse de servidores completos con ingentes cantidades de dato</p>
                    <p><a className="btn btn-secondary" href="#" role="button">Leer más &raquo;</a></p>
                </div>
 
            </div>
 
        </div>
 
    )
    
  }
 
}
 
export default Servicios;
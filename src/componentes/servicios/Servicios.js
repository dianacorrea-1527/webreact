import React from 'react';
 
import Menu from '../menu/Menu';
 
import Footer from '../footer/Footer';

import './Servicios.css'

 
 
class Servicios extends React.Component {
 
	render() {
 
		return(
 
			<>
 
			<Menu />
            <div className='cards'>
			<main role="main" className="flex-shrink-0 mt-5">
 
 <section className="text-center">
	 <div className="container">
	   <h1 className="jumbotron-heading">Servicios </h1>
	   <p className="lead text-dark">
		   Conoce un poco mas acerca de nuestros servicios!!!
	   </p>				      
	 </div>
 </section>

 <div className="album py-5 bg-light">
	 <div className="container-cards">

	   <div className="row">
		 <div className="col-md-4">
		  
		   <div className="card mb-4 shadow-sm">
		 
			   <img src= {process.env.PUBLIC_URL + 'images/img2.jpg'}  alt=""/>
			   
			 
			   <div className="card-body text-dark">
			 <h5 className='card-tittle text-primary '>Backup</h5>
			   <p className="card-text-primary">copia de seguridad a mayor o menor escala. Puede ser una versión reciente de la información contenida en todos los equipos de nuestra compañía, o puede tratarse de servidores completos con ingentes cantidades de datos.</p>
			   <div className="d-flex justify-content-between align-items-center">
 
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				   
				 
				   </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>
		 <div className="col-md-4">
		   <div className="card mb-4 shadow-sm">
		   <img src= {process.env.PUBLIC_URL + 'images/img3.jpg'}  alt=""/>
		   
			 <div className="card-body text-dark">
			 <h5 className='card-tittle text-primary '>AWS</h5>
			   <p className="card-text">Los servicios de nube son infraestructuras, plataformas o sistemas de software que alojan los proveedores externos y que se ponen a disposición de los usuarios a través de Internet. </p>
			   <div className="d-flex justify-content-between align-items-center">
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				 </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>
		 <div className="col-md-4">
		   <div className="card mb-4 shadow-sm">
		   <img src= {process.env.PUBLIC_URL + 'images/telefonia.jpg'}  alt=""/>
			 <div className="card-body">
			 <h5 className='card-tittle text-primary '>Telefonia Ip</h5>
			   <p className="card-text">Son el servicio que te permite utilizar o tener una línea telefónica o número virtual de una ciudad a través de una conexión de internet utilizando la telefonía IP (Protocolo de Internet)</p>
			   <div className="d-flex justify-content-between align-items-center">
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				 </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>

		 <div className="col-md-4">
		   <div className="card mb-4 shadow-sm">
		   <img src= {process.env.PUBLIC_URL + 'images/img1.jpg'}  alt=""/>
			 <div className="card-body">
			 <h5 className='card-tittle text-primary '>Cableado estructurado</h5>
			   <p className="card-text">El cableado estructurado es un tipo de cableado utilizado en edificios o locales con el objetivo de implantar una red de área local para transmitir información.</p>
			   <div className="d-flex justify-content-between align-items-center">
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				 </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>
		 <div className="col-md-4">
		   <div className="card mb-4 shadow-sm">
		   <img src= {process.env.PUBLIC_URL + 'images/img2.jpg'}  alt=""/>
			 <div className="card-body">
			 <h5 className='card-tittle text-primary '>Hacking Etico</h5>
 
			   <p className="card-text">Este tipo de hacking analiza los sistemas informáticos corporativos y los programas con el fin de aclarar el estado de la seguridad de una empresa. </p>
			   <div className="d-flex justify-content-between align-items-center">
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				 </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>
		 <div className="col-md-4">
		   <div className="card mb-4 shadow-sm">
		   <img src= {process.env.PUBLIC_URL + 'images/cableado.jpg'}  alt=""/>
			 <div className="card-body">
			 <h5 className='card-tittle text-primary '>Administracion de redes</h5>
			 
			   <p className="card-text">La administración de redes suministra información a las organizaciones relacionada con rutas de recursos, redundancias inaceptables y recursos poco utilizados.</p>
			   <div className="d-flex justify-content-between align-items-center">
				 <div className="btn-group">
				   <button type="button" className="btn btn-info btn-sm">Leer</button>
				   
				 </div>
				 
			   </div>
			 </div>
		   </div>
		 </div>

		 
			   </div>
			 </div>
		   </div>
	   

 

</main>

			</div>
			
 
	  		<Footer />
 
	  		</>
 
		)
 
	}
 
}
 
export default Servicios;
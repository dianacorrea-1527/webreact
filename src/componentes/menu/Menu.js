import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css';


class Menu extends React.Component {

  render() {

  	return (

  		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">

		    <NavLink to="/" className="navbar-brand">
			<img src={process.env.PUBLIC_URL + 'images/logo_large_2.png'} width="192" height="30"/>
			</NavLink>
			
			
		    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
		     	<span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarCollapse">
			    <ul className="navbar-nav mr-auto">

			        <li className="nav-item">
			          	<NavLink to="/" className="nav-link">Home </NavLink>
			        </li>
			        <li className="nav-item">
			        	<NavLink to="/nosotros" className="nav-link">Nosotros </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/servicios" className="nav-link">Servicios </NavLink>
			        </li>
			        <li className="nav-item">
			          	<NavLink to="/contacto" className="nav-link" aria-label>Contacto </NavLink>
			        </li>

			    </ul>

			    <form className="form-inline mt-2 mt-md-0">
			        <input className="btn btn-lg" type="text" placeholder="Buscar" aria-label="Buscar"/>
			        <button className="btn btn-info btn-lg"type="submit">Buscar</button>
			    </form>
		    </div>		    

		</nav>

  	)
    
  }

}

export default Menu;
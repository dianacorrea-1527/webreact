import React from 'react';
import reactRouterDom from 'react-router-dom';
import './footer.css'
import {NavLink} from 'react-router-dom';
 
 
class Footer extends React.Component {
 
  render() {
 
    return (
     

		   
      <div className="footer">
       <div className='container'>
       <NavLink to="/" className="navbar-brand">
			<img src={process.env.PUBLIC_URL + 'images/logo_large_2.png'} width="192" height="30"/>
			</NavLink>

      <button className="btn btn-default btn-circle btn-lg " role="button" aria-disabled="true">
            <p><a href="#">HOME</a></p>
            
           
            </button>
            <p>&copy; {(new Date().getFullYear())} American Technet. &middot; <a href="#">Soporte Especializado</a> &middot; <a href="#">recomiendanos!! </a></p>
      </div>

       </div>
        
          
            
           

      
     
    )
      
    
    
  }
 
}
 
export default Footer;
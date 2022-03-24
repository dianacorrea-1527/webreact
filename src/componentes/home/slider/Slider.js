import React from 'react';
//import './Slider.css';
 
class Slider extends React.Component {
 
  render() {
 
  	return (
		<div id="slider" class="carousel slide" data-bs-ride="carousel">
		<div className="carousel-indicators">
		  <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
		  <button type="button" data-bs-target="#slider" data-bs-slide-to="1" aria-label="Slide 2"></button>
		  <button type="button" data-bs-target="#slider" data-bs-slide-to="2" aria-label="Slide 3"></button>
		</div>
		<div className="carousel-inner">
		  <div className="carousel-item active">
			<img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/slider1.jpg'}   width="1200" height="400"/>
		  </div>
		  <div className="carousel-item">
			<img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/img2.jpg'}  width="1200" height="400"/>
		  </div>
		  <div className="carousel-item">
			<img className="d-block w-100" src={process.env.PUBLIC_URL + 'images/img3.jpg'} width="1200" height="400"/>
		  </div>
		</div>
		<button className="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
		  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		  <span className="visually-hidden">Previous</span>
		</button>
		<button className="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
		  <span className="carousel-control-next-icon" aria-hidden="true"></span>
		  <span className="visually-hidden">Next</span>
		</button>
	  </div>
 
  		
 
  	)
    
  }
 
}
 
export default Slider;
          
		  
 
	
    
  

 
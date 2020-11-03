import React from 'react'

function Slider()
{
    return(
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="images/img6.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <p id="caption">LEARN WITH US</p>
      <p id="caption-text">We provide you with the best learning materials</p>
      <a className="btn btn-primary btn-lg ">REGISTER NOW</a>
     </div>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="images/img3.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <p id="caption">We got you covered</p>
      <p id="caption-text">We aim to provide you with knowledge on all aspects</p>
      <a className="btn btn-secondary btn-lg ">
       READ OUR BOOKS</a>
     </div>
    </div>
  </div>
    <a className="carousel-control-prev" href="#carouselExampleSlidesOnly" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleSlidesOnly" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    );
}
export default Slider;
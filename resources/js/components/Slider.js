import React from 'react'

function Slider()
{
    return(
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="images/img6.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <p id="caption">LEARN WITH US</p>
      <p id="caption-text">We provide you with the best learning materials</p>
      <a className="btn btn-primary btn-lg ">REGISTER NOW</a>
     </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="images/img3.jpeg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <p id="caption">LEARN WITH US</p>
      <p id="caption-text">We provide you with the best learning materials</p>
      <a className="btn btn-primary btn-lg ">REGISTER NOW</a>
     </div>
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="images/img1.jpg" alt="First slide"/>
      <div className="carousel-caption d-none d-md-block">
      <p id="caption">LEARN WITH US</p>
      <p id="caption-text">We provide you with the best learning materials</p>
      <a className="btn btn-primary btn-lg ">REGISTER NOW</a>
     </div>
    </div>

  </div>
</div>
    );
}
export default Slider;
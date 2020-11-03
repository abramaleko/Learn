import React from 'react'

function Quote()
{
    return(
        <div className="container-fluid quote">
          <img src="images/abra.jpg" alt="Testimonial" className="d-block user mx-auto"/>
          <div className="allquote">
          <span id="text">" Live as if you were to die tomorrow , Learn as if you were to live forever"</span>
          <span id="name">Abraham Maleko</span>
          </div>
        </div>
    );
}

export default Quote;
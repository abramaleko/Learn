import React from 'react';

function BooksCategory()
{
    return (
        <div className="category container">
            <h1 className="header hover">Categories</h1>
            <div className="row">

                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Mathematics</span>
                <img src="images/maths.jpg" className="subcategory"/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Science</span>
                <img src="images/science.png" className="subcategory"/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Technology</span>
                <img src="images/technology.jpg" className="subcategory"/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Business</span>
                <img src="images/business.jpg" className="subcategory"/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Languages</span>
                <img src="images/language.jpg" className="subcategory"/>
                </div>
                </div>
                <div className="col-md-2">
                <div className="subject card">
                <span id="name">Arts</span>
                <img src="images/arts.jpg" className="subcategory"/>
                </div>
                </div>
  
            </div>
  

        </div>
        
    );
}
export default BooksCategory;
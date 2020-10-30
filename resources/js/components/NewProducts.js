import React from 'react'

function NewProducts()
{
    return(
        <div className="new-products">
          <h1 className="header">
              New Arrivals
          </h1>
          <div className="row">
              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">NEW</h5>
                <div className="card-body">
                    <img src="images/Products/Math.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >The Math Book</span>
              </div>
 
              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">NEW</h5>
                <div className="card-body">
                    <img src="images/Products/Chand.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >S.Chand's Principles Of Physics</span>
              </div>

              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">NEW</h5>
                <div className="card-body">
                    <img src="images/Products/BS.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >Biological Science</span>
              </div>

              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">OUT OF STOCK</h5>
                <div className="card-body">
                    <img src="images/Products/Eloquent.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >Eloquent JavaScript</span>
              </div>

              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">NEW</h5>
                <div className="card-body">
                    <img src="images/Products/Java.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >Java for beginners</span>
              </div>

              <div className="col-md-4 product">
              <div className="card">
              <h5 className="status">NEW</h5>
                <div className="card-body">
                    <img src="images/Products/financial.jpg" alt="ProductName" className="d-block productImage"/>
                </div>
                </div>
                    <span id="ProductName" >Financial Accounting</span>
              </div>

          </div>
          <a className="btn btn-outline-danger btn-lg all"> VIEW ALL</a>
        </div>
    );
}

export default NewProducts;
import React from 'react'

function Trending()
{
    return (
        <div className="Trending">
              <h1 className="header">
              Top Sales
          </h1>
             <div className="topSell">
              <img src="images/Products/Math.jpg" alt="ProductName" className="productImage"/>
              <div className="productDetails">
              <span id="name">The Math Book</span>
              <span id="price">Tshs 15,000</span>
              </div>
              </div>
              <hr/>

              <div className="topSell">
              <img src="images/Products/Chand.jpg" alt="ProductName" className="d-block productImage"/>
              <div className="productDetails">
              <span id="name">S.Chand's Principles Of Physics</span>
              <span id="price">Tshs 45,000</span>
              </div>
              </div>
              <hr/>

              <div className="topSell">
              <img src="images/Products/BS.jpg" alt="ProductName" className="d-block productImage"/>
              <div className="productDetails">
              <span id="name">Biological Science</span>
              <span id="price">Tshs 35,000</span>
              </div>
              </div>
              <hr/>

              <div className="topSell">
              <img src="images/Products/Eloquent.jpg" alt="ProductName" className="d-block productImage"/>
              <div className="productDetails">
              <span id="name">Eloquent JavaScript</span>
              <span id="price">Tshs 45,000</span>
              </div>
              </div>
              <hr/>

              <div className="topSell">
              <img src="images/Products/financial.jpg" alt="ProductName" className="d-block productImage"/>
              <div className="productDetails">
              <span id="name">Financial Accounting</span>
              <span id="price">Tshs 25,000</span>
              </div>
              </div>
              <hr/>

              <div className="topSell">
              <img src="images/Products/Java.jpg" alt="ProductName" className="d-block productImage"/>
              <div className="productDetails">
              <span id="name">Java for beginners</span>
              <span id="price">Tshs 55,000</span>
              </div>
              </div>
              <hr/>

    
        </div>
    );
}

export default Trending;
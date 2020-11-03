import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import BooksCategory from './BooksCategory'
import Slider from './Slider'
import NewProducts from './NewProducts'
import Trending from './Trending'
import Quote from './Quote'


function Index() {
    return (
      <div>
      <Navbar/>
      <Slider/>
      <BooksCategory/>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <NewProducts/>
          </div>
          <div className="col-md-4">
             <Trending/>
          </div>
      </div>
      </div>
      <Quote/>
      <br/><br/><br/><br/><br/>
      </div>
  
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

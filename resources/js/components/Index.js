import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import BooksCategory from './BooksCategory'
import Slider from './Slider'

function Index() {
    return (
      <div>
      <Navbar/>
      <Slider/>
      <BooksCategory/>
      </div>
  
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

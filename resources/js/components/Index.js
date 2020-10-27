import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar';
import BooksCategory from './BooksCategory'

function Index() {
    return (
      <div>
      <Navbar/>
      <BooksCategory/>
      </div>
  
    );
}

export default Index;

if (document.getElementById('index')) {
    ReactDOM.render(<Index />, document.getElementById('index'));
}

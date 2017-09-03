import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCA3XYgTTHWSon_4UUOI7wRHqk2Sp8lD6c';

// Create new component that should produce some HTML

const App = () => {
  return (
    <div>
      <SearchBar/>

    </div>
  );
}


// Take the component's HTML and render in the DOM

ReactDom.render (<App/>, document.querySelector('.container'));

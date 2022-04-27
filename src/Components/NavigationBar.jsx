import React from 'react';
import SearchBar from './SearchBar';


function NavigationBar() {
    return (
      <div>
        <ol>
          <li>Home</li>
          <li>About</li>
        </ol>
        <SearchBar/>
      </div>
    );
  }
  
  export default NavigationBar;
  
import React from 'react';
import SearchBar from './SearchBar';


function NavigationBar() {
    return (
      <div>
        <nav className='navbar navbar-light bg-light justify-content-between'>
          <a className='navbar-brand' href='#'>Music Library</a>
          <SearchBar/>
        </nav>

      </div>
    );
  }
  
  export default NavigationBar;
  
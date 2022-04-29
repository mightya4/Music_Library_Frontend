import React from 'react';
import { Form, FormGroup } from 'react-bootstrap';


function SearchBar() {
    return (
        <Form>  
          <input class="form-control" type="search"/>
          <button type="submit">Search</button>
        </Form>
    );
  }
  
  export default SearchBar;
  
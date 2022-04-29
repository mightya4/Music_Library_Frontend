import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';



function NavigationBar() {
    return (
          <Navbar collapseOnSelect expand="lg">
            <Container>
              <Navbar.Brand href='#home'><b>Music</b></Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link href="#songs">Songs</Nav.Link>
                <Nav.Link href="#albums">Albums</Nav.Link>
                <Nav.Link href="#artists">Artists</Nav.Link>
                <Nav.Link href="#genre">Genre</Nav.Link>
              </Navbar.Collapse>
            </Container>
          </Navbar>
    );
  }
  
  export default NavigationBar;
  
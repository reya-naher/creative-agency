import React from 'react';
import { Nav,Navbar,Button } from 'react-bootstrap';
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg">
      <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://i.imgur.com/C2lhwy9.png"
        width="100"
        height="40"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
            <Nav.Link className="mr-5" href="#link">Our Portfolio</Nav.Link>
            <Nav.Link className="mr-5" href="#home">Our Team</Nav.Link>
            <Nav.Link className="mr-5 " href="#link">Contact Us</Nav.Link>
            <Button variant="dark">Login</Button>
      </Nav>
  </Navbar.Collapse>
</Navbar>
    </>
  );
};

export default NavBar;
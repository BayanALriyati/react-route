import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="black">
        <Container>
          <Navbar.Brand href="#home">Route</Navbar.Brand>
          <Nav className="me-5 text-muted">
            <Nav.Link href="/Todo" className="me-5 display-1">ToDO</Nav.Link>
            <Nav.Link href="/Register" className="me-5 display-1">Register</Nav.Link>
            <Nav.Link href="/Login" className="me-5 display-1">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </> 
  );
}

export default ColorSchemesExample;
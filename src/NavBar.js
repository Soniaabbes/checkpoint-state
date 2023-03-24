import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export class NavBar extends Component {
  render() {
    return (
      <div>

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={{color: "#01be96", fontWeight:"bold"}}>Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">About me</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
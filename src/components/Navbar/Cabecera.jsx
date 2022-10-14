import React from 'react';
import { Link } from "react-router-dom";
import './Cabecera.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Cabecera() {
  console.log("no muestra el navbar?")

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/FormularioUbicaciones'>Register</Nav.Link>
              <Nav.Link as={Link} to ='/FormularioUbicaciones'>Nueva Ubicacion</Nav.Link>
              <Nav.Link as={Link} to ='/ListadoUbicaciones'>Lista Ubicaciones funciona?</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}


export default Cabecera

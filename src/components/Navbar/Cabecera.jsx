import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Cabecera.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { myContext } from '../../context/ClimaContext';


function Cabecera() {

  const { login, userLogin } = useContext(myContext);
  const navigate = useNavigate()
  function logOut() {
    userLogin(false)
    navigate('/Login')
  }

  return (
    <>
      {login ?
        <Navbar className='navbar navbar-dark bg-primary' expand="lg">
          <Container>
            <Navbar.Brand as={Link} to='/FormularioUbicaciones'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to='/RegistroUsuario'>Registrar nuevo Usuario</Nav.Link>
                <Nav.Link as={Link} to='/FormularioUbicaciones'>Nueva Ubicacion</Nav.Link>
                <Nav.Link as={Link} to='/ListadoUbicaciones'>Lista Ubicaciones</Nav.Link>
                <Nav.Link id="logout" onClick={() => logOut()} > Salir</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        : <> </>}
    </>
  )
}


export default Cabecera

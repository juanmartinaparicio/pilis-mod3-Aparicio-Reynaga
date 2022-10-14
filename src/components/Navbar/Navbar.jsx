import React from 'react'
import { Link, Router } from "react-router-dom";
import './Navbar.css'


function Navbar() {
  console.log("no muestra el navbar?")

  return (
    <div>
      <ul>
        <li><Link to = '/FormularioUbicaciones'></Link>Home</li>
        <li><Link to = '/ListadoUbicaciones'></Link>Nueva Ubicacion</li>
        <li>Listado de Ubicaciones</li>
      </ul>
    </div>
  )
}


export default Navbar

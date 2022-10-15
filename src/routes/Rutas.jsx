import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Registro from '../components/Login/Registro';
import UbicacionesForm from '../components/UbicacionesForm';
import UbicacionesList from '../components/UbicacionesList'



function Rutas() {
  return (
    <Routes>
    <Route path='/' element={<Login/>} />
    <Route path='/Login' element={<Login />} />
    <Route path='/RegistroUsuario' element={<Registro />} />
    <Route path='/FormularioUbicaciones' element={<UbicacionesForm />} />
    <Route path='/ListadoUbicaciones' element={<UbicacionesList />} />
  </Routes>
  )
}

export default Rutas
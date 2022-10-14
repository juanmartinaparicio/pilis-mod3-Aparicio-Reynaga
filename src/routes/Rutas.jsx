import React from 'react'
import { Route, Routes } from 'react-router-dom';
import UbicacionesForm from '../components/UbicacionesForm';
import UbicacionesList from '../components/UbicacionesList'



function Rutas() {
  return (
    <Routes>
    <Route path='/' element={<UbicacionesForm />} />
    <Route path='/FormularioUbicaciones' element={<UbicacionesForm />} />
    <Route path='/ListadoUbicaciones' element={<UbicacionesList />} />
  </Routes>
  )
}

export default Rutas
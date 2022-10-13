import React from 'react'
import { myContext } from '../context/ClimaContext'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { getClima } from '../api/apiClima'


function UbicacionesForm() {

  const { agregarUbicacion } = useContext(myContext);




  const cargarUbicacion = (ubicacion) => {
    getClima(ubicacion.lat, ubicacion.long).then((res) => {
      agregarUbicacion(res.lat, res.long, ubicacion.nombre, res.current_weather.temperature, res.current_weather.windspeed)
    })
    .catch((err) => console.log(err));
  }
  return (
    <div>ubicacionesForm</div>
  )
}

export default UbicacionesForm
import React from 'react'
import { myContext } from '../context/ClimaContext'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { getClima } from '../api/apiClima'



function UbicacionesForm() {

  const { agregarUbicacion } = useContext(myContext);
  const { register, formState: { errors }, handleSubmit } = useForm();


  const cargarUbicacion = (ubicacion) => {
    getClima(ubicacion.latitud, ubicacion.longitud).then((res) => {
      agregarUbicacion(ubicacion.nombre, res.latitude, res.longitude, res.current_weather.temperature, res.current_weather.windspeed)
    })
    .catch((err) => console.log(err));
  }
  return (
    <form onSubmit={handleSubmit(cargarUbicacion)}>
      <div>
        <label>Nombre Ubicacion:</label>
        <input type="text" {...register('nombre', {
          required: true,
        })} />
        {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre para la Ubicacion</span>}
      </div>
      <div>
        <label>Latitud:</label>
        <input type="number" step="0.1" {...register('latitud', {
          required: true,
        })} />
        {errors.latitud?.type === 'required' && <span >Debe ingresar Latitud</span>}
      </div>
      <div>
        <label>Longitud:</label>
        <input type="number" step="0.1" {...register('longitud', {
          required: true,
        })} />
        {errors.longitud?.type === 'required' && <span>Debe ingresar Longitud</span>}
      </div>
      <div className='button'>
        <button type='submit' className='subbt' >Guardar Ubicacion</button>
      </div>
    </form>
  )
}

export default UbicacionesForm
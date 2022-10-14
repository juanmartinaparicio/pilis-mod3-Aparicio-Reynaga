import React from 'react'
import { myContext } from '../context/ClimaContext'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { getClima } from '../api/apiClima'
import logo from '../images/mundo.jpg';
import './UbicacionesForm.css'


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
    <div>
      <div id='img'>
        <img src={logo} />
      </div>
      <br />
      <div className="card">
        <form onSubmit={handleSubmit(cargarUbicacion)}>
          <div className="card-header">Nueva Ubicacion</div>
          <div>
            <br />
            <div className="form-group">
              <label className='col-md-2 col-form-label text-md-right'>Nombre Ubicacion:</label>
              <input type="text"{...register('nombre', {
                required: true,
              })} />
              <br />
              {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre para la Ubicacion</span>}
            </div>
            <br />
            <div>
              <label className='col-md-2 col-form-label text-md-right'>Latitud:</label>
              <input type="number" step="0.00000000000001" {...register('latitud', {
                required: true,
              })} />
              <br />
              {errors.latitud?.type === 'required' && <span >Debe ingresar Latitud</span>}
            </div>
            <br />
            <div>
              <label className='col-md-2 col-form-label text-md-right'>Longitud:</label>
              <input type="number" step="0.0000000000001" {...register('longitud', {
                required: true,
              })} />
              <br />
              {errors.longitud?.type === 'required' && <span>Debe ingresar Longitud</span>}
            </div>
            <br />
            <div className='button'>
              <button type='submit' className='subbt btn btn-outline-primary' >Guardar Ubicacion</button>
            </div>
            <br />
          </div>
        </form>
      </div>
    </div>
  )
}

export default UbicacionesForm
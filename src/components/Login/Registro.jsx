import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { myContext } from '../../context/ClimaContext';


function Registro() {
  const { register, formState:{ errors }, handleSubmit } = useForm()
  const { agregarUsuario, userLogin } = useContext(myContext);
  const navigate = useNavigate();

  function cargarUsuario(data){
    agregarUsuario(data.usuario, data.password)
    userLogin(true)
    navigate('/Login')
  }

  return (
    <div>
    <br />
    <div className="card">
        <form onSubmit={handleSubmit(cargarUsuario)}>
            <div className="card-header">Nuevo Usuario</div>
            <div>
                <br />
                <div className="form-group">
                    <label className='col-md-2 col-form-label text-md-right'>Nombre Usuario:</label>
                    <input type="text"{...register('nombre', {
                        required: true,
                    })} />
                    <br />
                    {errors.nombre?.type === 'required' && <span>Debe ingresar un nombre de usuario</span>}
                </div>
                <br />
                <div>
                    <label className='col-md-2 col-form-label text-md-right'>Contraseña:</label>
                    <input type="text"{...register('contraseña', {
                        required: true,
                    })} />
                    <br />
                    {errors.latitud?.type === 'required' && <span >Debe ingresar la contraseña</span>}
                </div>
                <br />
                <br />
                <div className='button'>
                    <button type='submit' className='subbt btn btn-outline-primary' >Registrar Usuario</button>
                </div>
                <br />
                <br />
            </div>
        </form>
    </div>
</div>
  )
}

export default Registro
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { myContext } from '../../context/ClimaContext';


function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { usuarios, userLogin } = useContext(myContext);
    const navigate = useNavigate();

    function validarUsuario(data) {
        console.log(data.usuario)
        if (usuarios.find(usuario => usuario.nombre === data.usuario && usuario.password === data.password)) {
            userLogin(true)
            navigate('/FormularioUbicaciones')
        } else {
            alert('Usuario y/o Password invalidos')
        }

    }

    return (
        <div>
            <br />
            <div className="card">
                <form onSubmit={handleSubmit(validarUsuario)}>
                    <div className="card-header">Logearse</div>
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
                            <button type='submit' className='subbt btn btn-outline-primary' >Ingresar</button>
                        </div>
                        <br />
                        <div>
                            <p>Eres nuevo?</p>
                            <Link to={'/RegistroUsuario'}>Regristarse</Link>
                        </div>
                        <br />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
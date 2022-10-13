import { React, useState, useEffect, useContext } from 'react'
import { myContext } from '../context/ClimaContext';
import { BsTrash } from 'react-icons/bs'


function UbicacionesList() {
    const { ubicaciones, eliminarUbicacion } = useContext(myContext);


    return (
        <div>
            {ubicaciones.map((ubicacion) => (
                <div key={ubicacion.id}>
                    <p>Ubicacion : {ubicacion.nombre} </p>
                    <p>Latitud : {ubicacion.latitud} </p>
                    <p>Longitud : {ubicacion.longitud} </p>
                    <p>Temperatura (°C) : {ubicacion.temperatura} </p>
                    <p>Velocidad del Viento (m/h) : {ubicacion.velocidadViento} </p>
                    <button className='button1' onClick={() => eliminarUbicacion(ubicacion.id)}><BsTrash /></button>
                </div>
            ))}
        </div>
    )
}

export default UbicacionesList
import React, { createContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';


//crear contexto
export const myContext = createContext(null);

export default function ClimaContext({ children }) {
    const [ ubicaciones, setUbicaciones ] = useState([]);

    //*set LocalStorage
    useEffect(() => {
        let getUbicaciones = localStorage.getItem('ubicacion');
        if (getUbicaciones != null) {
            setUbicaciones(JSON.parse(getUbicaciones));
        } else {
            setUbicaciones([]);
        }
    }, [])

    //*update localStorage
    useEffect(() => {
        localStorage.setItem('ubicacion', JSON.stringify(ubicaciones));
    }, [ubicaciones])

    function agregarUbicacion(nombreUbi, latitud, longitud, temperatura, velocidadViento) {
        const ubicacionNueva = {
            id: nanoid(),
            nombre: nombreUbi,
            latitud: latitud,
            longitud: longitud,
            temperatura: temperatura,
            velocidadViento: velocidadViento
        };
        setUbicaciones([ ...ubicaciones, ubicacionNueva]);
        alert("Ubicacion Guardada")
    }

    function eliminarUbicacion(id) {
        const ubicacionFiter = ubicaciones.filter((ubicacion) => ubicacion.id !== id);
        setUbicaciones(ubicacionFiter);
    }
    return (
        <>
            <myContext.Provider value={{ ubicaciones, agregarUbicacion, eliminarUbicacion }}>{children}</myContext.Provider>
        </>
    )
}


import React, { createContext, useEffect, useState } from 'react'

//crear contexto
export const myContext = createContext(null);

export default function ClimaContext({ children }) {
    const [ubicaciones, setUbicaciones] = useState([]);

    //*set LocalStorage
    useEffect(() => {
        let getUbicacion = localStorage.getItem('ubicacion');
        if (getUbicacion != null) {
            setUbicaciones(JSON.parse(getUbicacion));
        } else {
            setUbicaciones([]);
        }
    }, [])

    //*update localStorage
    useEffect(() => {
        localStorage.setItem('ubicacion', JSON.stringify(ubicaciones));
    }, [ubicaciones])

    function agregarUbicacion(id, nombreUbi, lat, long, temp, velocidadViento) {
        const ubicacion = {
            id,
            nombreUbi,
            lat,
            long,
            temp,
            velocidadViento
        }
        setUbicaciones(...ubicaciones, ubicacion);
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


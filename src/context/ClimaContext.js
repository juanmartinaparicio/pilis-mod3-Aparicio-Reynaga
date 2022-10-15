import React, { createContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid';


//crear contexto
export const myContext = createContext(null);

export default function ClimaContext({ children }) {
    const [ubicaciones, setUbicaciones] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [login, setlogin] = useState(false)

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
        setUbicaciones([...ubicaciones, ubicacionNueva]);
        alert("Ubicacion Guardada")
    }

    function eliminarUbicacion(id) {
        const ubicacionFiter = ubicaciones.filter((ubicacion) => ubicacion.id !== id);
        setUbicaciones(ubicacionFiter);
    }

    function agregarUsuario(nombre, password) {
        const usuarioNuevo = {
            id: nanoid(),
            nombre,
            password,
        };
        setUsuarios([...usuarios, usuarioNuevo]);
        alert('Usuario Guardado!!')
    }

    function userLogin(valor) {
        setlogin(valor)
    }

    //*set LocalStorage usuarios
    useEffect(() => {
        let getUsuarios = localStorage.getItem('usaurio');
        if (getUsuarios != null) {
            setUsuarios(JSON.parse(getUsuarios));
        } else {
            setUsuarios([]);
        }
    }, [])

    //*update localStorage usuarios
    useEffect(() => {
        localStorage.setItem('usuario', JSON.stringify(usuarios));
    }, [usuarios])

    return (
        <>
            <myContext.Provider value={{ ubicaciones, agregarUbicacion, eliminarUbicacion, agregarUsuario, usuarios, login, userLogin }}>{children}</myContext.Provider>
        </>
    )
}


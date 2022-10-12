import { React, useState, useEffect } from 'react'
import { getClima } from '../api/apiClima'

function UbicacionesList() {
    const lat  = 51.5002;
    const long  = -0.1262;

    const [clima, setclima] = useState([]);
    useEffect(() => {
            getClima(lat , long ).then(response => setclima(response));
    }, [lat, long])
    return (
        <div>{JSON.stringify(clima)}</div>
    )
}

export default UbicacionesList
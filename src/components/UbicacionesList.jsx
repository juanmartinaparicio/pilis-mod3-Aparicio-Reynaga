import { React, useContext } from 'react'
import { myContext } from '../context/ClimaContext';
import { BsTrash } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';


function UbicacionesList() {
    const { ubicaciones, eliminarUbicacion } = useContext(myContext);

    return (
        <div className="row">
            {ubicaciones.map((ubicacion) => (
                <Card key={ubicacion.id} style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Ubicacion</Card.Title>
                        <Card.Text>
                            <span>Nombre : {ubicacion.nombre}</span>
                        </Card.Text>
                        <Card.Text>
                            <span>Latitud : {ubicacion.latitud}</span>
                        </Card.Text>
                        <Card.Text>
                            <span>Longitud : {ubicacion.longitud} </span>
                        </Card.Text>
                        <Card.Text>
                            <span>Temperatura (°C) : {ubicacion.temperatura}</span>
                        </Card.Text>
                        <Card.Text>
                            <span>Velocidad del Viento (m/h) : {ubicacion.velocidadViento}</span>
                        </Card.Text>
                    </Card.Body>
                    <button className='button1' onClick={() => eliminarUbicacion(ubicacion.id)}><BsTrash /></button>
                </Card>
            ))}
        </div>
    )
}

export default UbicacionesList
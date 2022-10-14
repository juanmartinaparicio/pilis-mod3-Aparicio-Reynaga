import { React, useContext } from 'react'
import { myContext } from '../context/ClimaContext';
import { BsTrash } from 'react-icons/bs'
import Card from 'react-bootstrap/Card';


function UbicacionesList() {
    const { ubicaciones, eliminarUbicacion } = useContext(myContext);

    return (
        <div className="row mt-4">
            {ubicaciones.map((ubicacion) => (
                <Card key={ubicacion.id} style={{ width: '20rem',margin: '5px' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Ubicacion</Card.Title>
                        <Card.Text>
                            Nombre : {ubicacion.nombre}
                        </Card.Text>
                        <Card.Text>
                            Latitud : {ubicacion.latitud}
                        </Card.Text>
                        <Card.Text>
                            Longitud : {ubicacion.longitud}
                        </Card.Text>
                        <Card.Text>
                            Temperatura (°C) : {ubicacion.temperatura}
                        </Card.Text>
                        <Card.Text>
                            Velocidad del Viento (m/h) : {ubicacion.velocidadViento}
                        </Card.Text>
                    </Card.Body>
                    <button className='button1 btn btn-outline-danger' onClick={() => eliminarUbicacion(ubicacion.id)}><BsTrash /></button>
                </Card>
            ))}
        </div>
    )
}

export default UbicacionesList
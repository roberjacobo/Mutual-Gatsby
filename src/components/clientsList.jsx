import React from "react"
import Table from "react-bootstrap/Table"

import "../styles/components/clientsList.css"
import Button from "react-bootstrap/Button"

const ClientsList = ({clients}) => {

  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre(s)</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>CURP</th>
            <th>Colonia</th>
            <th>Dirección</th>
            <th>Celular</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Adeudo</th>
            <th>Fecha de inscripción</th>
            <th>Tipo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clients?clients.map(clients => (
            <tr>
              <td>{clients._id}</td>
              <td>{clients.Nombre}</td>
              <td>{clients.ApellidoPat}</td>
              <td>{clients.ApellidoMat}</td>
              <td>{clients.Curp}</td>
              <td>{clients.Colonia}</td>
              <td>{clients.Direccion}</td>
              <td>{clients.Celular}</td>
              <td>{clients.Telefono}</td>
              <td>{clients.Correo}</td>
              <td>${clients.Adeudo}.00</td>
              <td>{clients.FechaInscripcion}</td>
              <td>{clients.Tipo}</td> 
            <td> 
              <div className="btnClient-Container">
                <Button variant="warning">Actualizar</Button>
                <Button
                /*  onClick={() => removeClient(client.id)}
                    variant="danger" */
                >
                  Eliminar
                </Button>
              </div>
            </td>
          </tr>
          )):""}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientsList

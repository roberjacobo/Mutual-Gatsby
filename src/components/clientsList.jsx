import React from "react"
import Table from "react-bootstrap/Table"
import { Link } from 'gatsby'

import "../styles/components/clientsList.css"
import Button from "react-bootstrap/Button"

const ClientsList = ({ clients }) => {

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
          {clients ? clients.map(client => (
            <tr>
              <td>{client.UserId}</td>
              <td>{client.Nombre}</td>
              <td>{client.ApellidoPat}</td>
              <td>{client.ApellidoMat}</td>
              <td>{client.Curp}</td>
              <td>{client.Colonia}</td>
              <td>{client.Direccion}</td>
              <td>{client.Celular}</td>
              <td>{client.Telefono}</td>
              <td>{client.Correo}</td>
              <td>${client.Adeudo}.00</td>
              <td>{client.FechaInscripcion}</td>
              <td>{client.Tipo}</td>
              <td>
                <div className="btnClient-Container">
                  <Link to='/addClient/' state={{ id: client._id }}>
                    <Button variant="warning">Actualizar</Button>
                  </Link>

                  <Button
                  /*  onClick={() => removeClient(client.id)}
                      variant="danger" */
                  >
                    Eliminar
                </Button>
                </div>
              </td>
            </tr>
          )) : ""}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientsList

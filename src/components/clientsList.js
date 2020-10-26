import React, { useContext } from "react"
import Table from "react-bootstrap/Table"

import { GlobalContext } from "../context/globalState"

import "../styles/components/clientsList.css"
import Button from "react-bootstrap/Button"

const ClientsList = () => {
  const { clients, removeClient } = useContext(GlobalContext)
  console.log(readAllClients())
  
  return (
    <div className="table-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
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
          {clients.map(client => (
            <tr>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.PrimerApellido}</td>
              <td>{client.SegundoApellido}</td>
              <td>{client.Curp}</td>
              <td>{client.Colonia}</td>
              <td>{client.Direccion}</td>
              <td>{client.Celular}</td>
              <td>{client.Telefono}</td>
              <td>{client.Correo}</td>
              <td>${client.Adeudo}.00</td>
              <td>{client.Fecha}</td>
              <td>{client.Tipo}</td>
              <td>
                <div className="btnClient-Container">
                  <Button variant="warning">Actualizar</Button>
                  <Button
                    onClick={() => removeClient(client.id)}
                    variant="danger"
                  >
                    Eliminar
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ClientsList

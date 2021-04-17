import React from "react"
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.css'

import "../styles/components/clientsList.css"

const ClientsList = ({ clients, deleteClient, getClients }) => {

  const handleDelete = async (_id) => {
    await deleteClient(_id)
    await getClients()
  }

  return (
    <div className="table-container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre(s)</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            {/* <th>CURP</th> */}
            <th>Colonia</th>
            <th>Dirección</th>
            <th>Ciudad</th>
            <th>Celular</th>
            <th>Teléfono</th>
            <th>Correo</th>
            <th>Adeudo</th>
            <th>Fecha de inscripción</th>
            <th>Tipo Cliente (Morosidad)</th>
            <th>Ruta</th>
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
             {/*  <td>{client.Curp}</td> */}
              <td>{client.Colonia}</td>
              <td>{client.Direccion}</td>
              <td>{client.Ciudad}</td>
              <td>{client.Celular}</td>
              <td>{client.Telefono}</td>
              <td>{client.Correo}</td>
              <td>${client.Adeudo}.00</td>
              <td>{client.FechaInscripcion}</td>
              <td>{client.TipoCliente}</td>
              <td>{client.Ruta}</td>
              <td>
                <div className="btnClient-Container">
                  <Link to='/addClient/' state={{ id: client._id }}>
                    <button className="button-update">Actualizar</button>
                  </Link>

                  <button className="button-delete"
                    onClick={() => handleDelete(client._id)}
                    variant="danger"
                  >
                    Eliminar
                </button>
                </div>
              </td>
            </tr>
          )) : ""}
        </tbody>
      </table>
    </div>
  )
}

export default ClientsList

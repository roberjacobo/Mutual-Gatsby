import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import FormControl from "react-bootstrap/FormControl"
import "bootstrap/dist/css/bootstrap.css"

const EmployeeClientsList = ({   //actions
  clients,
  getClients,
  //props data
  location,
}) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const clientList = clients ? clients.data.clients : [];

  const getClientsSearch = async (page, search) => {
    setPage(1);
    await getClients(search, page);
  }


  const nextPage = async (page, search) => {
    setPage(page + 1);
    await getClients(search, page);
  }

  const previousPage = async (page, search) => {
    setPage(page - 1);
    await getClients(search, page);
  }
  return (
    <>
      <div className="filtro-container">
        <div className="buscar-clientes">
          <p>Buscar clientes: </p>
          <div>
            <FormControl onChange={e => setSearch(e.target.value)} />
            <button onClick={() => getClientsSearch(page, search)}>Buscar</button>
          </div>
          filtro: ID, Apellido paterno y ruta
        </div>

        <div className="paginacion-clientes">
          <p>Paginación:</p>
          {page > 1 ? (
            <button onClick={() => previousPage(page, search)}>Anterior</button>
          ) : null}
          <FormControl value={page} disabled />
          {page !== clients.totalPages ? (
            <button onClick={() => nextPage(page, search)}>Siguiente</button>
          ) : null}
        </div>
      </div>
      <div className="table-container">
        <table className="table table-striped">
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
            </tr>
          </thead>
          <tbody>
            {clients
              ? clientList.map(client => (
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
                  <td>{new Date(client.FechaInscripcion).toJSON().slice(0, 10)}</td>
                  <td>{client.Tipo}</td>
                  <td>
                    <Link to='/paymentRegister/' state={{ id: client._id }}/* 
                    onClick={() => setChargeId()} */>
                      <button className="button-charge">
                        Cobrar
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
              : ""}
          </tbody>
        </table>
      </div>
    </>
  )
}


const mapStateToProps = state => {
  return {
    clients: state.clients.clients,
    clientsTotalAmount: state.clients.clientsTotalAmount,
    logged: state.login.login,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...clientsActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeClientsList)
import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import * as loginActions from "../redux/actions/login"

import ClientsList from "../components/clientsList"
import RegistroPago from "../components/registroPago"
import Fichatotales from "../components/fichatotales"

import FormControl from "react-bootstrap/FormControl"

import "../styles/mutual.css"

function Mutual({
  //actions
  clients,
  getClients,
  logged,
  logout,
  deleteClient,
  getClientsAmount,
  clientsTotalAmount,
  postChargeToClients,
  //props data
  location,
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const clientList = clients ? clients.data.clients : [];

  useEffect(() => {
    if (logged.rol !== "ADMIN_ROLE") navigate("/panelEmpleado");
    getClients(search, page);
    getClientsAmount();
  }, []);

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

  useEffect(() => {
    const { ok } = logged
    if (!ok) {
      navigate("/loginPage/")
    }
  }, [logged])
  return (
    <>
      <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/addClient/">
            <button className="button">Suscribir Cliente</button>
          </Link>
          <Link to="/addEmployee/">
            <button className="button">Nuevo Empleado</button>
          </Link>
          {/* <a href="#pagos">
            <button className="button">Registrar Pago</button>
          </a> */}
          <button className="button">Registrar Egreso</button>
          <Link to="/historial/">
            <button className="button">Historial de Pagos</button>
          </Link>
        </div>
        <div className="logOut">
          <button onClick={logout} className="buttonLogOut">
            Salir de la Mutual
          </button>
        </div>
        <div className="form-container"></div>
      </div>
      <div className="egresos-container">
        <Fichatotales
          totalClients={clients.data.totalClients}
          clientsTotalAmount={clientsTotalAmount}
          postChargeToClients={postChargeToClients}
        />
      </div>

      {/* <div className="registroPago-container" id="pagos">
        <h2>Registro de pagos hechos por los socios</h2>
        <RegistroPago getClients={getClients} search={search} />
      </div> */}
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
      <div className="lista-container">
        <ClientsList clients={clientList} deleteClient={deleteClient} />
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
  bindActionCreators({ ...clientsActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)

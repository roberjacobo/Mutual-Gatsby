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
  postChargeToClients
}) {
  const [search, setSearch] = useState("")
  const [clientes, setClients] = useState([])

  useEffect(() => {
    if (logged.rol !== "ADMIN_ROLE")
      navigate("/panelEmpleado");
    getClients(search)
    getClientsAmount()
  }, [clientes, search]);

  useEffect(() => {
    const { ok } = logged
    if (!ok) {
      navigate('/loginPage/')
    } else {
      console.log('')
    }
  }, [logged]);

  return (
    <>
      <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/addClient/"><button className="button">Suscribir Cliente</button></Link>
          <Link to="/addEmployee/"><button className="button">Nuevo Empleado</button></Link>
          <a href="#pagos"><button className="button">Registrar Pago</button></a>
          <button className="button">Registrar Egreso</button>
          <Link to="/historial/"><button className="button">Historial de Pagos</button></Link>
        </div>
        <div className="logOut"><button onClick={logout} className="buttonLogOut">Salir de la Mutual</button></div>
        <div className="form-container">
        </div>
      </div>
        <div className="egresos-container">
        <Fichatotales clients={clients} clientsTotalAmount={clientsTotalAmount} postChargeToClients={postChargeToClients} />
        </div>


        <div className="registroPago-container" id="pagos">
        <h2>Registro de pagos hechos por los socios</h2>
        <RegistroPago clients={clients} getClients={getClients} search={search} />
        </div>


      {/*<div className="egresos-container">
          <h2>Registro de egresos</h2>
        <Egresos />
        </div> */}

      <div className="buscar-clientes">
        <p>Buscar clientes: </p>
        <FormControl onChange={(e) => setSearch(e.target.value)} />
        filtro: ID, Apellido paterno y ruta
      </div>
      <div className="lista-container">
        <ClientsList deleteClient={deleteClient} clients={clients} getClients={getClients} />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    clientsTotalAmount: state.clients.clientsTotalAmount,
    logged: state.login.login,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...clientsActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)

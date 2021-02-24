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
import Button from 'react-bootstrap/Button'

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
          <Link to="/addClient/"><Button variant="outline-primary">Suscribir Cliente</Button></Link>
          <Link to="/addEmployee/"><Button variant="outline-primary">Nuevo Empleado</Button></Link>
          <Button variant="outline-primary">Registrar Pago</Button>
          <Button variant="outline-primary">Registrar Egreso</Button>
          <Button variant="outline-warning"><Link to="/historial/">Historial de Pagos</Link></Button>
        </div>
        <div className="logOut"><Button onClick={logout} variant="outline-danger">Salir de la Mutual</Button></div>
        <div className="form-container">
        </div>
      </div>
        <div className="egresos-container">
        <Fichatotales clients={clients} clientsTotalAmount={clientsTotalAmount} />
        </div>


        <div className="registroPago-container">
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

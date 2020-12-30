import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import * as employeesActions from "../redux/actions/employee"
import * as chargesActions from "../redux/actions/charges"

/* import Header from "../components/header"
import Footer from "../components/footer" */
import ClientsList from "../components/clientsList"

import RegistroPago from "../components/registroPago"
import Egresos from "../components/egresos"
import Fichatotales from "../components/fichatotales"

import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/Button'

import "../styles/mutual.css"

function Mutual({
  clients,
  getClients,
  employees,
  logout,
  deleteClient,
  getClientsAmount,
  clientsTotalAmount,
}) {

  const [search, setSearch] = useState("")
  const [clientes, setClients] = useState([])
  useEffect(() => {
    getClients(search)
    getClientsAmount()
  }, [clientes, search]);

  useEffect(() => {
    const { ok } = employees
    if (!ok) {
      navigate('/loginPage/')
    } else {
      console.log('')
    }
  }, [employees]);

  return (
    <>
      <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/addClient/"><Button variant="secondary">Suscribir Cliente</Button></Link>
          <Button variant="success">Registrar Pago</Button>
          <Button variant="danger">Egreso</Button>
          <Button variant="warning"><Link to="/historial/">Historial de Pagos</Link></Button>
        </div>
        <div className="logOut"><Button onClick={logout} variant="danger">Salir de la Mutual</Button></div>
        <div className="form-container">
        </div>
      </div>
        <div className="egresos-container">
        <Fichatotales clients={clients} clientsTotalAmount={clientsTotalAmount} />
        </div>


        <div className="registroPago-container">
        <h2>Registro de pagos hechos por los socios</h2>
        <RegistroPago clients={clients} />
        </div>


      {/*<div className="egresos-container">
          <h2>Registro de egresos</h2>
        <Egresos />
        </div> */}

      <div className="buscar-clientes">
        <p>Buscar: </p>
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
    employees: state.employees.employees
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...clientsActions, ...employeesActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)

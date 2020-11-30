import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import  * as Actions from "../redux/actions/clients"
import * as employeeActions from "../redux/actions/employee"

import Header from "../components/header"
import Footer from "../components/footer"
import ClientsList from "../components/clientsList"

import RegistroPago from "../components/registroPago"
import Egresos from "../components/egresos"
import Fichatotales from "../components/fichatotales"

import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/Button'

import "../styles/mutual.css"

function Mutual({ clients, getClients, employees, logout, deleteClients }) {

  const [clientes, setClients] = useState([])
  useEffect(() => {
    getClients()
  }, [clientes]);

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
        <Fichatotales clients={clients}/>
        </div>
        <div className="registroPago-container">
          <h2>Registro de pagos hechos por los clientes</h2>
        <RegistroPago />
        </div>
        <div className="egresos-container">
          <h2>Registro de egresos</h2>
        <Egresos />
        </div>
      <p>Buscar</p>
      <div className=""><FormControl /></div>
      <div className="lista-container">
          <ClientsList clients={clients} />
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients,
    employees: state.employees.employees,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...Actions, ...employeeActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)

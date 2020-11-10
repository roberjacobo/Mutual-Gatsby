import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import  * as Actions from "../redux/actions/clients"

import Header from "../components/header"
import Footer from "../components/footer"
import ClientsList from "../components/clientsList"

import RegistroPago from "../components/registroPago"
import Egresos from "../components/egresos"
import Fichatotales from "../components/fichatotales"

import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/Button'

import "../styles/mutual.css"

function Mutual({clients, getClients}) {

  const [clientes, setClients] = useState([])
  useEffect(() => {
    getClients()
  }, [clientes]);

  return (
    <>
      <Header />
      <div className="btn-form-container">
        <div className="btn-container">
        <Link to="/addClients/"><Button variant="secondary">Suscribir Cliente</Button></Link>
          <Button variant="success">Registrar Pago</Button>
          <Button variant="danger">Egreso</Button>
          <Button variant="warning"><Link to="/historial/">Historial de Pagos</Link></Button>
        </div>
        <div className="form-container">
          <p>Buscar</p>
          <div><FormControl /></div>
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
          <ClientsList clients={clients} />
      <Footer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators (Actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)
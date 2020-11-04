import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import ClientsList from "../components/clientsList"

import RegistroPago from "../components/registroPago"
import Egresos from "../components/egresos"
import Fichatotales from "../components/fichatotales"

import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/Button'

import "../styles/mutual.css"

import ""

export default function Mutual() {
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

      {/* <GlobalProvider> */}
        <ClientsList />
     {/*  </GlobalProvider> */}
        <div className="registroPago-container">
          <h2>Registro de pagos hechos por los clientes</h2>
        <RegistroPago />
        </div>
        <div className="egresos-container">
          <h2>Registro de egresos</h2>
        <Egresos />
        </div>
        <div className="egresos-container">
        <Fichatotales />
        </div>
      <Footer />
    </>
  )
}

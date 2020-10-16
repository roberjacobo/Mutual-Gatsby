import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"
import AddClient from "../components/addCliente"
import RegistroPago from "../components/registroPago"
import Egresos from "../components/egresos"
import Fichatotales from "../components/fichatotales"

import Table from "react-bootstrap/Table"
import FormControl from "react-bootstrap/FormControl"
import Button from 'react-bootstrap/Button'


import "../styles/mutual.css"

export default function Mutual() {

  return (
    <>
      <Header />
      <div className="btn-form-container">
        <div className="btn-container">
          <Button variant="secondary">Suscribir Cliente</Button>
          <Button variant="success">Registrar Pago</Button>
          <Button variant="danger">Egreso</Button>
          <Button variant="warning"><Link to="/historial/">Historial de Pagos</Link></Button>
        </div>
        <div className="form-container">
          <p>Buscar</p>
          <div><FormControl /></div>
        </div>

      </div>
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </Table>
        </div>
        <div className="formulario-container">
        <h2>Registro de nuevo cliente</h2>
        <AddClient/>
        {/* <NuevoCliente /> */}
        </div>
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

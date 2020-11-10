import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import Table from "react-bootstrap/Table"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

function historial() {
  return (
    <>
      <Header />
      <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/nuevoCliente/">
            <Button variant="secondary">Suscribir Cliente</Button>
          </Link>
          <Button variant="success">Registrar Pago</Button>
          <Button variant="danger">Egreso</Button>
          <Button variant="warning">Historial de Pagos</Button>
        </div>
        <div className="form-container">
          <p>Buscar</p>
          <div>
            <FormControl />
          </div>
        </div>
      </div>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID Pago</th>
              <th>ID Cliente</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>Colonia</th>
              <th>Dirección</th>
              <th>Celular</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Adeudo</th>
              <th>Fecha de Cobro</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
              <th>1</th>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}

export default historial

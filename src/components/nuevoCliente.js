import React from "react"
import "../styles/components/nuevoCliente.css"
import { Link } from "gatsby"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const nuevoCliente = () => {
  return (
    <div className="container">
      <div className="columnas-1 col-11">
        <InputGroup className="cl-2 col-5">
          <InputGroup.Prepend>
            <InputGroup.Text>Nombre(s)</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-4">
          <InputGroup.Prepend>
            <InputGroup.Text>Primer Apellido</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-4">
          <InputGroup.Prepend>
            <InputGroup.Text>Segundo Apellido</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
      </div>
      <br />
      <div className="columnas-2 col-11">
        <InputGroup className="cl-2 col-3">
          <InputGroup.Prepend>
            <InputGroup.Text>CURP</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Colonia</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-4">
          <InputGroup.Prepend>
            <InputGroup.Text>Dirección</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
      </div>
      <br />
      <div className="columnas-3 col-11">
        <InputGroup className="cl-2 col-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Celular</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Teléfono</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2 col-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Correo</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
      </div>
      <br />

      <div className="button-container">
        <Button variant="success" className="btnVerde">
          <Link to="">Aceptar</Link>
        </Button>
        <Button variant="danger" className="btnRojo">
          Cancelar
        </Button>
      </div>
    </div>
  )
}

export default nuevoCliente

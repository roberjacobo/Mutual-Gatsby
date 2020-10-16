import React from "react"
import "../styles/components/egresos.css"

import { Link } from "gatsby"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const Egresos = () => {
  return (
    <div>
      <InputGroup className="cl-2">
        <InputGroup.Prepend>
          <InputGroup.Text>Monto</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl type="number" />
      </InputGroup>
      <br />
      <InputGroup className="cl-2">
        <InputGroup.Prepend>
          <InputGroup.Text>Justificación</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl as="textarea" aria-label="With textarea" />
      </InputGroup>

      <div className="button-container">
        <Button variant="success" className="btnVerde">
          Aceptar
        </Button>
        <Button variant="danger" className="btnRojo">
          Cancelar
        </Button>
      </div>
    </div>
  )
}

export default Egresos

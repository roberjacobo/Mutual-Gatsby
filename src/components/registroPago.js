import React from "react"
import "../styles/components/registroPago.css"
import { Link } from "gatsby"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const registroPago = () => {
  return (
    <div>
      <div>
        <InputGroup className="cl-2">
          <InputGroup.Prepend>
            <InputGroup.Text>Usuario</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl />
        </InputGroup>
        <br />
        <InputGroup className="cl-2">
          <InputGroup.Prepend>
            <InputGroup.Text>Monto</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl type="number" />
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
    </div>
  )
}

export default registroPago

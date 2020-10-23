import React from "react"
import { Link } from "gatsby"

import user from "../images/user.png"

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
/* import Form from "react-bootstrap/Form" */
import Button from "react-bootstrap/Button"

const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="login">
          <div>
            <img className="img-User" src={user} alt="user" />
          </div>
          <InputGroup className="cl-2">
            <InputGroup.Prepend>
              <InputGroup.Text>Usuario</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl />
          </InputGroup>
          <br />
          <InputGroup className="cl-2">
            <InputGroup.Prepend>
              <InputGroup.Text>Contraseña</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl type="password" />
          </InputGroup>
          <br />

          <div className="button-container">
                <Link to="/mutual/">
                  <Button variant="success" className="btnVerde">
                    Aceptar
                  </Button>
            </Link>
            <Link to="/">
            <Button variant="danger" className="btnRojo">
              Cancelar
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

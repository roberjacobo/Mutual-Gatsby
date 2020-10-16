import React from "react"
import { Link } from "gatsby"

import axios from "axios"
import services from "../services/services"

import user from "../images/user.png"

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
/* import Form from "react-bootstrap/Form" */
import Button from "react-bootstrap/Button"

const Login = () => {

  const loginRequest = () => {
    axios.post('http://localhost:3003/api/v1/login', {
      email    : this.state.email,
      password : this.state.password
    })
  .then(user => {
    /* */
  })
  }

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
            <Button variant="success" className="btnVerde" onClick={loginRequest()}>
              Aceptar
            </Button>
            <Button variant="danger" className="btnRojo">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

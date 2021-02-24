import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"


import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as loginActions from "../redux/actions/login"

import user from "../images/user.png"

import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

import * as yup from "yup"
import { Formik } from "formik"

import Form from "react-bootstrap/Form"

const schema = yup.object({
  Correo: yup.string().required(),
  Contrasenia: yup.string().required(),
})

const Login = ({ login, logged  }) => {
  //Inicializa el estado que se enviará con cadenas vacías
  const [values, setValues] = useState({
    Correo: '',
    Contrasenia: '',
  })

  useEffect(() => {
    switch (logged.rol) {
      case "ADMIN_ROLE":
        navigate('/mutual');
        break;
      case "EMPLOYEE_ROLE":
        navigate('/panelEmpleado');
        break;
      default:
        break;
    }
  }, [logged]);


  //Función que vigila el cambio de estado del formulario
  const handleChange = (event) => {
    event.preventDefault()
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = event => {
    event.preventDefault()
    login(values)
    // call actions
  }

  return (
    <>
      <div className="login-container">
        <div className="login">
          <div>
            <img className="img-User" src={user} alt="user" />
          </div>
          <div>
            <Formik
              validationSchema={schema}
              onSubmit={sendData}
              initialValues={{
                Correo: '',
                Contrasenia: '',
              }}
            >
              {({
                handleBlur,
                touched,
                isValid,
                errors,
              }) => (
                <div className="input-container">
                  <Form noValidate onSubmit={sendData}>
                    <div className="correo-container">
                    <InputGroup className="cl-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Correo</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="text"
                        name="Correo"
                        value={values.Correo}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    </div>
                    <br />
                    <div className="contrasenia-container">
                    <InputGroup className="cl-2">
                      <InputGroup.Prepend>
                        <InputGroup.Text>Contraseña</InputGroup.Text>
                      </InputGroup.Prepend>
                      <FormControl
                        type="password"
                        name="Contrasenia"
                        value={values.Contrasenia}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    </div>
                    <br />

                    <div>
                      <Button
                        type="submit"
                        variant="success"
                        className="btnVerde"
                      >
                        Aceptar
                    </Button>
                      <Link to="/">
                        <Button variant="danger" className="btnRojo">
                          Cancelar
                      </Button>
                      </Link>
                    </div>
                  </Form>
                </div>
                )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    logged: state.login.login,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

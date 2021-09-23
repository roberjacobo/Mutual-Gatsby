import React, { useState, useEffect } from "react"
import { Link, navigate } from "gatsby"


import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as loginActions from "../redux/actions/login"

import user from "../images/Logo.png"

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
      <div className="login container">
        <div className="row">
          <div className="col-12 col-md-6 left-login">
            <img className="img-User" src={user} alt="user" />
            <p>Mutual de San Juan Bautista</p>
          </div>
          <div className="col-12 col-md-6">
            <div className="right-login">
            <h2>
              Iniciar Sesión
            </h2>
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
                      <FormControl
                        type="password"
                        name="Contrasenia"
                        value={values.Contrasenia}
                        onChange={handleChange}
                      />
                    </InputGroup>
                    </div>
                    <br />
                    <div className="login-buttons">
                      <Button
                        type="submit"
                        className="btnVerde"
                      >
                        Aceptar
                      </Button>
                    </div>
                  </Form>
                </div>
                )}
            </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    logged: state.login.login,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Login)

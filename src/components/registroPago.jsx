import React, { Fragment, useState } from "react"
import "../styles/components/registroPago.css"
import { Link } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as chargesActions from "../redux/actions/charges"
import * as clientsActions from "../redux/actions/clients"

import * as yup from "yup"
import { Formik } from "formik"

import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const schema = yup.object({
  Monto: yup.string().required(),
  IdCliente: yup.string().required(),
  IdEmpleado: yup.string().required(),
  Fecha: yup.string().required(),
})

const ChargeView = ({
  //actions
  addCharge,
  editClient
}) => {
  const charge = 0;
  // const charge = charges.filter(charge => charge._id === id)[0] || null

  /*   const [cobros, setCobros] = useState([])
    useEffect(() => {
      getCharges()
    }, [cobros]); */

  //inicializa el estado que se enviará con cadenas vacías
  const [chargeValues, setChargeValues] = useState({
    Estado: true,
    Monto: charge ? charge.Monto : '',
    IdCliente: charge ? charge.IdCliente : '',
    IdEmpleado: charge ? charge.IdEmpleado : '',
    Fecha: charge ? charge.Fecha : '',
    Nota: charge ? charge.Nota : '',
  })

  //Función que vigila el cambio de estado del formulario
  const handleChange = (event) => {
    event.preventDefault()
    setChargeValues({
      ...chargeValues,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = (event) => {
    event.preventDefault()
    addCharge(chargeValues)
  }

  return (
    <>
      <Fragment>
      <div>
          <Formik
            validationSchema={schema}
            onSubmit={sendData}
            initialValues={{
              Estado: true,
              Monto: '',
              IdCliente: '',
              IdEmpleado: '',
              Fecha: '',
            }}
          >
            {({
              handleBlur,
              touched,
              isValid,
              isInvalid,
              errors,
            }) => (
              <Form noValidate onSubmit={sendData}>
                <Form.Row>

                  <Form.Group as={Col} md="4" controlId="validationFormik01">
                    <Form.Label>Id del pago realizado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Id"
                      name="IdCobroUsuario"
                      value={chargeValues.IdCobroUsuario}
                      onChange={handleChange}
                      isValid={touched.IdCobroUsuario && !errors.IdCobroUsuario}
                      isInvalid={!!errors.IdCobroUsuario}
                    />
                    <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.IdCobroUsuario}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationFormik02">
                    <Form.Label>Monto</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Monto"
                      name="Monto"
                      value={chargeValues.Monto}
                      onChange={handleChange}
                      isValid={touched.Monto && !errors.Monto}
                      isInvalid={!!errors.Monto}
                    />
                    <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Monto}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationFormik03">
                    <Form.Label>Id Cliente</Form.Label>
                    <Form.Control
                      type="Number"
                      placeholder="Id Cliente"
                      name="IdCliente"
                      value={chargeValues.IdCliente}
                      onChange={handleChange}
                      isValid={touched.IdCliente && !errors.IdCliente}
                      isInvalid={!!errors.IdCliente}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.IdCliente}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationFormikUsername"
                  >
                    <Form.Label>Id Empleado</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="text"
                        placeholder="Id Empleado"
                        aria-describedby="inputGroupPrepend"
                        name="IdEmpleado"
                        value={chargeValues.IdEmpleado}
                        onChange={handleChange}
                        isValid={
                          touched.IdEmpleado && !errors.IdEmpleado
                        }
                        isInvalid={!!errors.IdEmpleado}
                      />
                      <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.IdEmpleado}
                      </Form.Control.Feedback>
                  </InputGroup>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
                    <Form.Label>Fecha</Form.Label>
                    <Form.Control
                      type="date"
                      placeholder="Fecha"
                      name="Fecha"
                      value={chargeValues.Fecha}
                      onChange={handleChange}
                      isValid={touched.Fecha && !errors.Fecha}
                      isInvalid={!!errors.Fecha}
                    />

                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Fecha}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} md="10" controlId="validationFormik05">
                    <Form.Label>Nota (opcional)</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Añade una nota para este cobro"
                      name="Nota"
                      value={chargeValues.Nota}
                      onChange={handleChange}
                      isValid={touched.Nota && !errors.Nota}
                      isInvalid={!!errors.Nota}
                    />

                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Fecha}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Check
                    required
                    name="Terms"
                    label="Confirmación"
                    onChange={handleChange}
                    isInvalid={!!errors.Terms}
                    iaValid={touched.Terms}
                    feedback={errors.Terms}
                    id="validationFormik07"
                  />
                </Form.Group>

                <Button className="btn-AceptarPago" type="submit">Aceptar</Button>
                {/* <Button className="btn-EditarPago" type="">Editar</Button> */}
              </Form>
            )}
          </Formik>
      </div>
      </Fragment>
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    charges: state.charges.charges,
    clients: state.clients.clients
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(chargesActions, clientsActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ChargeView)


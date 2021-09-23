import React, { Fragment, useState, useEffect } from "react";
import { navigate } from "gatsby"
import "../styles/components/registroPago.css";

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import * as loginActions from "../redux/actions/login"
import * as chargesActions from "../redux/actions/charges"

import * as yup from "yup";
import { Formik } from "formik";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const schema = yup.object({
  IdCobroUsuario: yup.string().required(),
  Monto: yup.string().required(),
  IdCliente: yup.string().required(),
  IdEmpleado: yup.string().required(),
  Fecha: yup.string().required(),
})

const PaymentRegister = (
  //actions
  {
    charges,
    addCharge,
    getCharges,
    logged,
    editClientsAmount,
    clients,
    getClients,
    search,
    location: { state }
  }) => {
  const charge = 0;
  const client = clients ? clients : [];
  console.log("charges: ", charges.length);

  useEffect(() => {
    getCharges()
  }, []);
  //const newIdCharge = charges ? charges.charges.length : 0;
  //inicializa el estado que se enviará con cadenas vacías
  const [chargeValues, setChargeValues] = useState({
    Estado: true,
    IdCobroUsuario: charges.length,
    Monto: '',
    UserId: client ? client.UserId : '',
    IdEmpleado: logged.id,
    Fecha: new Date().toJSON().slice(0, 10),
    Nota: '',
  });
  //Función que vigila el cambio de estado del formulario
  const handleChange = (event) => {
    event.preventDefault()
    setChargeValues({
      ...chargeValues,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = async (event) => {
    event.preventDefault()
    addCharge(chargeValues)
    client.Adeudo = client.Adeudo - Number(chargeValues.Monto)
    await editClientsAmount(client)
    await getClients(search);
    navigate("/historial");
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
              UserId: '',
              IdEmpleado: '',
              Fecha: '',
            }}
          >
            {({
              touched,
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
                      name="UserId"
                      value={chargeValues.UserId}
                      onChange={handleChange}
                      isValid={touched.UserId && !errors.UserId}
                      isInvalid={!!errors.UserId}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.UserId}
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
                      defaultValue={chargeValues.Fecha}
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

                <button className="button" type="submit">Aceptar</button>
              </Form>
            )}
          </Formik>
        </div>
      </Fragment>
    </>
  )
}
const mapStateToProps = state => {
  console.log("state: ", state);
  return {
    clients: state.clients.clients.data.clients[0],
    logged: state.login.login,
    charges: state.charges.charges,
    editClientsAmount: state.clients.editClientsAmount
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ ...clientsActions, ...loginActions, ...chargesActions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PaymentRegister)
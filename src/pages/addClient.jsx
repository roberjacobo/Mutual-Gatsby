import React, { Fragment, useState } from "react"
import "../styles/mutual.css"
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Link } from "gatsby" */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"

import Header from "../components/header"
import Footer from "../components/footer"

import * as yup from "yup"
import { Formik } from "formik"


import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const schema = yup.object({
  UserId: yup.string().required(),
  Nombre: yup.string().required(),
  ApellidoPat: yup.string().required(),
  ApellidoMat: yup.string().required(),
  Curp: yup.string(),
  Colonia: yup.string().required(),
  Direccion: yup.string().required(),
  Celular: yup.string().required(),
  Telefono: yup.string().required(),
  Correo: yup.string(),
  Adeudo: yup.string().required(),
  Tipo: yup.string().required(),
  Terms: yup.bool().required(),
})

const ClientView = ({
  //actions
  addClient,
  editClient,
  getClients,
  //props data
  location: { state },
  //redux prop
  clients
}) => {
  const id = state ? state.id : 0

  const client = clients.filter(client => client._id === id)[0] || null

  //Inicializa el estado que se enviará con cadenas vacías
  const [values, setValues] = useState({
    Estado: true,
    UserId: client ? client.UserId : '',
    Tipo: client ? client.Tipo : '',
    Nombre: client ? client.Nombre : '',
    ApellidoPat: client ? client.ApellidoPat : '',
    ApellidoMat: client ? client.ApellidoMat : '',
    Curp: client ? client.Curp : '',
    Colonia: client ? client.Colonia : '',
    Direccion: client ? client.Direccion : '',
    Celular: client ? client.Celular : '',
    Telefono: client ? client.Telefono : '',
    Correo: client ? client.Correo : '',
    Adeudo: client ? client.Adeudo : '',
    FechaInscripcion: client ? client.FechaInscripcion : '',
    })


  //Función que vigila el cambio de estado del formulario
  const handleChange = (event) => {
    event.preventDefault()
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  
  const sendData = async (event) => {
    event.preventDefault()
    if(id) {
      await editClient(values)
    } else {
      await addClient(values)
    }
    await getClients()
    window.history.back();
    // call actions -
  }

  return (
    <>
      <Header />
      <Fragment>
        <div className="label-addClient">
          <Formik
            validationSchema={schema}
            onSubmit={sendData}
            initialValues={{
              Estado: true,
              Tipo: '',
              Nombre: '',
              ApellidoPat: '',
              ApellidoMat: '',
              Curp: '',
              Colonia: '',
              Direccion: '',
              Celular: '',
              Telefono: '',
              Correo: '',
              Adeudo: '',
              FechaInscripcion: '',
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
                      <Form.Label>Identificador</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Identificador"
                        name="UserId"
                        value={values.UserId}
                        onChange={handleChange}
                        isValid={touched.UserId && !errors.UserId}
                        isInvalid={!!errors.UserId}
                      />
                      <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.Nombre}
                      </Form.Control.Feedback>
                    </Form.Group>

                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="Nombre"
                    value={values.Nombre}
                    onChange={handleChange}
                    isValid={touched.Nombre && !errors.Nombre}
                    isInvalid={!!errors.Nombre}
                  />
                  <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Nombre}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik02">
                  <Form.Label>Primer Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Primer Apellido"
                    name="ApellidoPat"
                    value={values.ApellidoPat}
                    onChange={handleChange}
                    isValid={touched.ApellidoPat && !errors.ApellidoPat}
                    isInvalid={!!errors.apellidoPat}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.ApellidoPat}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationFormikUsername"
                >
                  <Form.Label>Segundo Apellido</Form.Label>
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Segundo Apellido"
                      aria-describedby="inputGroupPrepend"
                      name="ApellidoMat"
                      value={values.ApellidoMat}
                      onChange={handleChange}
                      isValid={
                        touched.ApellidoMat && !errors.ApellidoMat
                      }
                      isInvalid={!!errors.ApellidoMat}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.ApellidoMat}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>CURP</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CURP"
                    name="Curp"
                    value={values.Curp}
                    onChange={handleChange}
                    isValid={touched.Curp && !errors.Curp}
                    isInvalid={!!errors.Curp}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Curp}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Calle y número exterior"
                    name="Direccion"
                    value={values.Direccion}
                    onChange={handleChange}
                    isValid={touched.Direccion && !errors.Direccion}
                    isInvalid={!!errors.Direccion}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Direccion}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1112223344"
                    name="Celular"
                    value={values.Celular}
                    onChange={handleChange}
                    isValid={touched.Celular && !errors.Celular}
                    isInvalid={!!errors.Celular}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Celular}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>Colonia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Colonia"
                    name="Colonia"
                    value={values.Colonia}
                    onChange={handleChange}
                    isValid={touched.Colonia && !errors.Colonia}
                    isInvalid={!!errors.Colonia}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.Colonia}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1112223344"
                    name="Telefono"
                    value={values.Telefono}
                    onChange={handleChange}
                    isValid={touched.Telefono && !errors.Telefono}
                    isInvalid={!!errors.Telefono}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Telefono}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="asd@asd.com"
                    name="Correo"
                    value={values.Correo}
                    onChange={handleChange}
                    isValid={touched.Correo && !errors.Correo}
                    isInvalid={!!errors.Correo}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Correo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="2" controlId="validationFormik06">
                  <Form.Label>Adeudo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adeudo"
                    name="Adeudo"
                    value={values.Adeudo}
                    onChange={handleChange}
                    isValid={touched.Adeudo && !errors.Adeudo}
                    isInvalid={!!errors.Adeudo}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Adeudo}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationFormik07">
                  <Form.Label>Tipo de Cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tipo"
                    name="Tipo"
                    value={values.Tipo}
                    onChange={handleChange}
                    isValid={touched.Tipo && !errors.Tipo}
                    isInvalid={!!errors.Tipo}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.Tipo}
                  </Form.Control.Feedback>
                </Form.Group>

                    <Form.Group as={Col} md="2" controlId="validationFormik07">
                      <Form.Label>Fecha de ingreso</Form.Label>
                      <Form.Control
                        type="date"
                        name="FechaInscripcion"
                        value={values.FechaInscripcion}
                        onChange={handleChange}
                        isValid={touched.FechaInscripcion && !errors.FechaInscripcion}
                        isInvalid={!!errors.FechaInscripcion}
                      />
                      <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.FechaInscripcion}
                      </Form.Control.Feedback>
                    </Form.Group>

              </Form.Row>

              <Form.Group>
                <Form.Check
                  required
                  name="Terms"
                  label="Acepto los términos y condiciones"
                  onChange={handleChange}
                  isInvalid={!!errors.Terms}
                  iaValid={touched.Terms}
                  feedback={errors.Terms}
                  id="validationFormik07"
                />
              </Form.Group>

              <Button type="submit">Aceptar</Button>
            </Form>
          )}
      </Formik>
    </div>
  </Fragment>
  <Footer />
</>
)
}
const mapStateToProps = (state) => {
  return {
    clients: state.clients.clients
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(clientsActions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClientView)

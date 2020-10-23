import React, { useState, useContext } from "react"
import "../styles/addClient.css"

import Header from "../components/header"
import Footer from "../components/footer"

import * as yup from "yup"
import { Formik } from "formik"

import { GlobalContext } from "../context/globalState"
import { Link } from "gatsby"

import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const schema = yup.object({
  nombre: yup.string().required(),
  apellido: yup.string().required(),
  segundoApellido: yup.string().required(),
  curp: yup.string().required(),
  colonia: yup.string().required(),
  direccion: yup.string().required(),
  celular: yup.string().required(),
  telefono: yup.string().required(),
  correo: yup.string().required(),
  adeudo: yup.string().required(),
  tipo: yup.string().required(),
  terms: yup.bool().required(),
})

const AddClients = () => {
  const [name, setName] = useState("")
  const { addClients } = useContext(GlobalContext)
  const onSubmit = () => {
    const newClient = {
      id: 4,
      name: "user Four",
    }
    addClients(newClient)
  }

  return (
    <>
      <Header />
      <div className="label-addClient">
        <Formik
          validationSchema={schema}
          onSubmit={onSubmit}
          initialValues={{
            nombre: "",
            apellido: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    value={values.nombre}
                    onChange={handleChange}
                    isValid={touched.nombre && !errors.nombre}
                    isInvalid={!!errors.nombre}
                  />
                  <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.nombre}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik02">
                  <Form.Label>Primer Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Primer Apellido"
                    name="apellido"
                    value={values.apellido}
                    onChange={handleChange}
                    isValid={touched.apellido && !errors.apellido}
                    isInvalid={!!errors.apellido}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.apellido}
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
                      name="segundoApellido"
                      value={values.segundoApellido}
                      onChange={handleChange}
                      isValid={
                        touched.segundoApellido && !errors.segundoApellido
                      }
                      isInvalid={!!errors.segundoApellido}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.segundoApellido}
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
                    name="curp"
                    value={values.curp}
                    onChange={handleChange}
                    isValid={touched.curp && !errors.curp}
                    isInvalid={!!errors.curp}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.curp}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Calle y número exterior"
                    name="direccion"
                    value={values.direccion}
                    onChange={handleChange}
                    isValid={touched.direccion && !errors.direccion}
                    isInvalid={!!errors.direccion}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.direccion}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Celular</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1112223344"
                    name="celular"
                    value={values.celular}
                    onChange={handleChange}
                    isValid={touched.celular && !errors.celular}
                    isInvalid={!!errors.celular}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.celular}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>Colonia</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="colonia"
                    name="colonia"
                    value={values.colonia}
                    onChange={handleChange}
                    isValid={touched.colonia && !errors.colonia}
                    isInvalid={!!errors.colonia}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.colonia}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik04">
                  <Form.Label>Teléfono</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="1112223344"
                    name="telefono"
                    value={values.telefono}
                    onChange={handleChange}
                    isValid={touched.telefono && !errors.telefono}
                    isInvalid={!!errors.telefono}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.telefono}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationFormik05">
                  <Form.Label>Correo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="asd@asd.com"
                    name="correo"
                    value={values.correo}
                    onChange={handleChange}
                    isValid={touched.correo && !errors.correo}
                    isInvalid={!!errors.correo}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.correo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="2" controlId="validationFormik06">
                  <Form.Label>Adeudo</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Adeudo"
                    name="adeudo"
                    value={values.adeudo}
                    onChange={handleChange}
                    isValid={touched.adeudo && !errors.adeudo}
                    isInvalid={!!errors.adeudo}
                  />

                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.adeudo}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="2" controlId="validationFormik07">
                  <Form.Label>Tipo de Cliente</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Tipo"
                    name="tipo"
                    value={values.tipo}
                    onChange={handleChange}
                    isValid={touched.tipo && !errors.tipo}
                    isInvalid={!!errors.tipo}
                  />
                  <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.tipo}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Check
                  required
                  name="terms"
                  label="Acepto los términos y condiciones"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  iaValid={touched.terms}
                  feedback={errors.terms}
                  id="validationFormik07"
                />
              </Form.Group>

              <Button type="submit">Aceptar</Button>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  )
}

export default AddClients

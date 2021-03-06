import React, { Fragment, useState, useEffect } from "react"

import "../styles/addClient.css"
import 'bootstrap/dist/css/bootstrap.min.css';
/* import { Link } from "gatsby" */

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as employeesActions from "../redux/actions/employee"

import Header from "../components/header"
import Footer from "../components/footer"

import * as yup from "yup"
import { Formik } from "formik"

import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

const schema = yup.object({
  EmployeeId: yup.string().required(),
  Nombre: yup.string().required(),
  ApellidoPat: yup.string().required(),
  ApellidoMat: yup.string().required(),
  Curp: yup.string(),
  Colonia: yup.string().required(),
  Direccion: yup.string().required(),
  Celular: yup.string().required(),
  Telefono: yup.string().required(),
  Correo: yup.string(),
  Contrasenia: yup.string().required(),
  Terms: yup.bool().required(),
})

const EditEmployee = ({
  //actions
  addEmployee,
  editEmployee,
  getEmployees,
  //props data
  location: { state },
  //redux prop
  employees
}) => {
  const id = state ? state.id : 0

  /* const client = status.clients.filter(client => client.id === id)[0] */

  const employee = employees.filter(employee => employee._id === id)[0] || null

  //Inicializa el estado que se enviará con cadenas vacías
  const [values, setValues] = useState({
    Estado: true,
    EmployeeId: employee ? employee.EmployeeId : '',
    Nombre: employee ? employee.Nombre : '',
    ApellidoPat: employee ? employee.ApellidoPat : '',
    ApellidoMat: employee ? employee.ApellidoMat : '',
    Curp: employee ? employee.Curp : '',
    Colonia: employee ? employee.Colonia : '',
    Direccion: employee ? employee.Direccion : '',
    Celular: employee ? employee.Celular : '',
    Telefono: employee ? employee.Telefono : '',
    Correo: employee ? employee.Correo : '',
    Contrasenia: employee ? employee.Contrasenia : '',
    Rol: 'EMPLOYEE_ROLE',
    Salario: employee ? employee.Salario : '',
    FechaIngreso: employee ? employee.fechaIngreso : '',
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
    if (id) {
      await editEmployee(values)
    } else {
      await addEmployee(values)
    }
    await getEmployees()
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
              EmployeeId: '',
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
              Contrasenia: '',
              Salario: '',
              fechaIngreso: '',
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
                      name="EmployeeId"
                      value={values.EmployeeId}
                      onChange={handleChange}
                      isValid={touched.EmployeeId && !errors.EmployeeId}
                      isInvalid={!!errors.EmployeeId}
                    />
                    <Form.Control.Feedback>se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Nombre}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="4" controlId="validationFormik02">
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
                  <Form.Group as={Col} md="3" controlId="validationFormik03">
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
                    as={Col} //1250 2100
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
                  <Form.Group as={Col} md="3" controlId="validationFormik04">
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
                  <Form.Group as={Col} md="3" controlId="validationFormik05">
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
                  <Form.Group as={Col} md="3" controlId="validationFormik06">
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
                  <Form.Group as={Col} md="6" controlId="validationFormik07">
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

                  <Form.Group as={Col} md="3" controlId="validationFormik08">
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

                  <Form.Group as={Col} md="3" controlId="validationFormik09">
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
                  <Form.Group as={Col} md="3" controlId="validationFormik10">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="contraseña"
                      name="Contrasenia"
                      value={values.Contrasenia}
                      onChange={handleChange}
                      isValid={touched.Contrasenia && !errors.Contrasenia}
                      isInvalid={!!errors.Contrasenia}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Contrasenia}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="2" controlId="validationFormik11">
                    <Form.Label>Salario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Salario"
                      name="Salario"
                      value={values.Salario}
                      onChange={handleChange}
                      isValid={touched.Salario && !errors.Salario}
                      isInvalid={!!errors.Salario}
                    />

                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.Salario}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="2" controlId="validationFormik12">
                    <Form.Label>Fecha de ingreso</Form.Label>
                    <Form.Control
                      type="date"
                      name="fechaIngreso"
                      value={values.fechaIngreso}
                      onChange={handleChange}
                      isValid={touched.fechaIngreso && !errors.fechaIngreso}
                      isInvalid={!!errors.fechaIngreso}
                    />
                    <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.fechaIngreso}
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
    employees: state.employees.employees,
    logged: state.login.login,
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({ ...employeesActions }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee)
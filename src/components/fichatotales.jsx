import React, { Fragment, useState } from "react"
import "../styles/components/fichatotales.css"

import * as yup from "yup"
import { Formik } from "formik"

import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"

const schema = yup.object({
  cantidadACobrar: yup.number().required()
})

const FichaTotales = ({
  //actions
  clientsTotalAmount,
  postChargeToClients,
  totalClients,
}) => {
  //inicializa el estado que se enviará con cadenas vacías
  const [chargeValue, setChargeValue] = useState({
    cantidadACobrar: 0,
  })

  const handleChange = event => {
    event.preventDefault()
    setChargeValue({
      ...chargeValue,
      [event.target.name]: Number(event.target.value),
    })
  }


  const sendData = async event => {
    event.preventDefault()
    await postChargeToClients(chargeValue)
  }

  return (
    <div>
      <div className="ficha-container">
        <div className="ficha">
          <h2>Totales</h2>
          <br />
          <h4>Total de Socios inscritos:</h4>
          <label>{totalClients}</label>
          <h4>Adeudo total de socios:</h4>
          <label>${clientsTotalAmount}</label>
          <br />
          <Fragment>
            <Formik
              validationSchema={schema}
              onSubmit={sendData}
              initialValues={{
                cantidadACobrar: "",
              }}
            >
              {({ handleBlur, touched, isValid, isInvalid, errors }) => (
                <Form noValidate onSubmit={sendData}>
                  <Form.Group as={Col} controlId="validationFormik95">
                    <Form.Label>Cantidad a cobrar:</Form.Label>
                    <InputGroup>
                      <Form.Control
                        type="Number"
                        placeholder="6"
                        name="cantidadACobrar"
                        value={chargeValue.cantidadACobrar}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback>Se ve bien</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        {errors.cantidadACobrar}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                  <br />
                  <div className="btn-container">
                    <Button type="submit" variant="dark" id="botonCobro">
                      Mutual Máster
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default FichaTotales

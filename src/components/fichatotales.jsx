import React, { useState } from "react"
import "../styles/components/fichatotales.css"

import * as yup from "yup"
import { Formik } from "formik"

import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"

import Button from "react-bootstrap/Button"
import Card from '../icons/credit-card.svg';
import Group from '../icons/group.svg';

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
    <div className="row">
      <div className="col-6 col-md-4">
        <div className="yellow box">
          <h4>Total de Socios inscritos</h4>
          <h5>Socios</h5>
          <Group />
          <label>{totalClients}</label>
        </div>
      </div>
      <div className="col-6 col-md-4">
        <div className="green box">
          <h4>Adeudo total de socios</h4>
          <h5>Adeudo</h5>
          <label>${clientsTotalAmount}</label>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <div className="white box">
        <h4>Máster</h4>
        <Formik
              validationSchema={schema}
              onSubmit={sendData}
              initialValues={{
                cantidadACobrar: "",
              }}
            >
              {({ handleBlur, touched, isValid, isInvalid, errors }) => (
                <Form noValidate onSubmit={sendData} className="row">
                    <div className="col-8 d-none">
                      <Form.Control
                        type="Number"
                        placeholder="6"
                        name="cantidadACobrar"
                        value={6}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cantidadACobrar}
                      </Form.Control.Feedback>
                    </div>
                    <div className="col-12">
                      <Button type="submit" variant="dark" id="botonCobro">
                        Cobrar
                      </Button>
                    </div>
                </Form>
              )}
            </Formik>
        </div>
      </div>
    </div>
  )
}

export default FichaTotales

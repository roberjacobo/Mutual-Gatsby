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
      <div className="col">
        <div className="yellow box">
          <h4>Total de Socios inscritos</h4>
          <Group />
          <label>{totalClients}</label>
        </div>
      </div>
      <div className="col">
        <div className="green box">
          <h4>Adeudo total de socios</h4>
          <label>${clientsTotalAmount}</label>
        </div>
      </div>
      <div className="col">
        <div className="white box">
        <h4>Cantidad a cobrar</h4>
        <Formik
              validationSchema={schema}
              onSubmit={sendData}
              initialValues={{
                cantidadACobrar: "",
              }}
            >
              {({ handleBlur, touched, isValid, isInvalid, errors }) => (
                <Form noValidate onSubmit={sendData} className="row">
                    <div className="col-8 master-qty">
                      <Card />
                      <Form.Control
                        type="Number"
                        placeholder="6"
                        name="cantidadACobrar"
                        value={chargeValue.cantidadACobrar}
                        onChange={handleChange}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.cantidadACobrar}
                      </Form.Control.Feedback>
                    </div>
                    <div className="col-4">
                      <Button type="submit" variant="dark" id="botonCobro">
                        Máster
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

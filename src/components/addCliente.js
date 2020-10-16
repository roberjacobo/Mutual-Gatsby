import React, { useState } from "react"
import Services from "../http-common"

import "../styles/components/nuevoCliente.css"
import { Link } from "gatsby"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"

const AddClient = () => {
  const fecha = new Date()
  const day = fecha.getDate()
  const month = fecha.getMonth()
  const year = fecha.getFullYear()

  const initialClientState = {
    id: null,
    Nombre: "",
    ApellidoPat: "",
    ApellidoMat: "",
    Curp: "",
    Colonia: "",
    Direccion: "",
    Celular: 0,
    Telefono: 0,
    Correo: "",
    Adeudo: 0,
    FechaIncripcion: year + month + day,
  }
  const [client, setClient] = useState(initialClientState)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = event => {
    const { name, value } = event.target
    setClient({ ...client, [name]: value })
  }

  const saveClient = () => {
    var data = {
      nombre: client.Nombre,
      apellidoPat: client.ApellidoPat,
      apellidoMat: client.ApellidoMat,
      curp: client.Curp,
      colonia: client.Colonia,
      direccion: client.Direccion,
      celular: client.Celular,
      telefono: client.Telefono,
      correo: client.Correo,
      adeudo: client.Adeudo,
      fechaInscripcion: client.FechaIncripcion,
    }

    Services.create(data)
      .then(response => {
        setClient({
          nombre: response.data.nombre,
          apellidoPat: response.data.apellidoPat,
          apellidoMat: response.data.apellidoMat,
          curp: response.data.curp,
          colonia: response.data.colonia,
          direccion: response.data.direccion,
          celular: response.data.celular,
          telefono: response.data.telefono,
          correo: response.data.correo,
          adeudo: response.data.adeudo,
          fechaInscripcion: response.data.fechaInscripcion,
        })
        setSubmitted(true)
        console.log(response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  const newClient = () => {
    setClient(initialClientState)
    setSubmitted(false)
  }

  return (
    <>
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newClient}>
              Add
            </button>
          </div>
        ) : (
          <div className="container">
            <div className="columnas-1 col-11">
              <InputGroup className="cl-2 col-5">
                <InputGroup.Prepend>
                  <InputGroup.Text htmlFor="nombre">Nombre(s)</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  className="form-control"
                  id="client"
                  required
                  value={client.name}
                  onChange={handleInputChange}
                  name="name"
                />
              </InputGroup>
              <br />
              <InputGroup className="cl-2 col-4">
                <InputGroup.Prepend>
                  <InputGroup.Text htmlFor="apellidoPat">
                    Primer Apellido
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  className="form-control"
                  id="apellidoPat"
                  required
                  value={client.apellidoPat}
                  onChange={handleInputChange}
                  name="apellidoPat"
                />
              </InputGroup>
              <br />
              <InputGroup className="cl-2 col-4">
                <InputGroup.Prepend>
                  <InputGroup.Text>Segundo Apellido</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  type="text"
                  className="form-control"
                  id="apellidoMat"
                  required
                  value={client.apellidoMat}
                  onChange={handleInputChange}
                  name="apellidoMat"
                />
              </InputGroup>
            </div>
            <br />

            <div className="container">
              <div className="columnas-2 col-11">
                <InputGroup className="cl-2 col-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>CURP</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="curp"
                    required
                    value={client.curp}
                    onChange={handleInputChange}
                    name="curp"
                  />
                </InputGroup>
                <br />
                <InputGroup className="cl-2 col-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Colonia</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="curp"
                    required
                    value={client.curp}
                    onChange={handleInputChange}
                    name="curp"
                  />
                </InputGroup>
                <br />
                <InputGroup className="cl-2 col-4">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Dirección</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="direccion"
                    required
                    value={client.dirección}
                    onChange={handleInputChange}
                    name="direccion"
                  />
                </InputGroup>
              </div>
              <br />
              <div className="columnas-3 col-11">
                <InputGroup className="cl-2 col-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Celular</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="celular"
                    required
                    value={client.celular}
                    onChange={handleInputChange}
                    name="celular"
                  />
                </InputGroup>
                <br />
                <InputGroup className="cl-2 col-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Teléfono</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="telefono"
                    required
                    value={client.telefono}
                    onChange={handleInputChange}
                    name="telefono"
                  />
                </InputGroup>
                <br />
                <InputGroup className="cl-2 col-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text>Correo</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    className="form-control"
                    id="correo"
                    required
                    value={client.correo}
                    onChange={handleInputChange}
                    name="correo"
                  />
                </InputGroup>
              </div>
              <br />

              <div className="button-container">
                <Button
                  variant="success"
                  className="btnVerde"
                  onClick={saveClient}
                >
                  Aceptar
                </Button>
                <Button variant="danger" className="btnRojo">
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default AddClient

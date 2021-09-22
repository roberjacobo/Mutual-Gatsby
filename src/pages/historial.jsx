import React, { useEffect, useState } from "react"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as chargesActions from "../redux/actions/charges"

import Header from "../components/header"
import Footer from "../components/footer"

import Table from "react-bootstrap/Table"

const Historial = ({
  charges,
  getCharges,
  deleteCharge,
/* editCharge */
}) => {

  const [pagos, setPagos] = useState([])
  useEffect(() => {
    getCharges()
  }, [pagos]);

  const handleDelete = async (_id) => {
    await deleteCharge(_id)
    await getCharges()
  }

  return (
    <>
      <Header />
      {/*       <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/addClient/">
            <Button variant="secondary">Suscribir Cliente</Button>
          </Link>
          <Button variant="success">Registrar Pago</Button>
          <Button variant="danger">Egreso</Button>
          <Button variant="warning">Historial de Pagos</Button>
        </div> */}
      {/*         <div className="form-container">
          <p>Buscar</p>
          <div>
            <FormControl />
          </div>
        </div> */}
      {/* </div> */}
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID Pago</th>
              <th>Monto</th>
              <th>Id Socio</th>
              <th>Empleado</th>
              <th>Fecha</th>
              <th>Nota</th>
              {/*  <th>Acciones</th> */}
            </tr>
          </thead>
          <tbody>
            {charges ? charges.map(charge => (
              <tr>
                <td>{charge.IdCobroUsuario}</td>
                <td>{charge.Monto}</td>
                <td>{charge.UserId}</td>
                <td>{charge.IdEmpleado}</td>
                <td>{new Date(charge.Fecha).toJSON().slice(0, 10)}</td>
                <td>{charge.Nota}</td>
                {/*                 <td>
                  <div className="btnCharge-Container">
                    <Link to='/Mutual/' state={{ id: charge._id }}>
                      <Button variant="warning">Actualizar</Button>
                    </Link>

                    <Button
                      onClick={() => handleDelete(charge._id)}
                      variant="danger"
                    >
                      Eliminar
                </Button>
                  </div>
                </td> */}
            </tr>
            )) : ""}
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  )
}
const mapStateToProps = (state) => {
  return {
    charges: state.charges.charges
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...chargesActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Historial)

import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as chargesActions from "../redux/actions/charges"

import HeaderMutual from "../components/header-mutual"
import Footer from "../components/footer"

import Table from "react-bootstrap/Table"

const Historial = ({
  charges,
  getCharges,
  deleteCharge,
  editCharge
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
    <div className="container">
      <HeaderMutual isHistory />
      <div className="btn-form-container">
        <div className="btn-container">
          <Link to="/addClient/">
            <button variant="secondary">Suscribir Cliente</button>
          </Link>
          <button variant="success">Registrar Pago</button>
          <button variant="danger">Egreso</button>
        </div>
      </div>
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
              <th>Acciones</th>
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
                <td>
                  <div className="btnCharge-Container">
                    <Link to='/mutual/' state={{ id: charge._id }}>
                      <button variant="warning">Actualizar</button>
                    </Link>

                    <button
                      onClick={() => handleDelete(charge._id)}
                      variant="danger"
                    >
                      Eliminar
                </button>
                  </div>
                </td>
            </tr>
            )) : ""}
          </tbody>
        </Table>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    charges: state.charges.charges
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ ...chargesActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Historial)

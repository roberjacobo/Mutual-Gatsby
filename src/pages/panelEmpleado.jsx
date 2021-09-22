import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"

import "../styles/panelEmpleado.css"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import * as employeesActions from "../redux/actions/employee"
import * as loginActions from "../redux/actions/login"

import Header from "../components/header"
import Footer from "../components/footer"
import RegistroPagoEmp from "../components/registroPagoEmpl"
import EmployeeClientList from "../components/employeeClientList"

import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"

function PanelEmpleado({ clients, getClients, logout, logged }) {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [clientList, setClientList] = useState([])

  useEffect(() => {
    getClients(search, page)
    setClientList(clients.data.clients)
  }, [])

  useEffect(() => {
    const { ok } = logged
    if (!ok) {
      navigate("/loginPage/")
    } else {
      console.log("")
    }
  }, [logged])

  return (
    <>
      <Header />
      <div className="panelEmpleado-container">
        <div className="logOut">
          <Button onClick={logout} variant="danger">
            Salir
          </Button>
        </div>
        {/*         <div className="panelFlexContainer">
          <h2>Registro de pagos hechos por los socios</h2>
          <RegistroPagoEmp
            clients={clients}
            getClients={getClients}
            search={search}
            logged={logged}
          />
        </div> */}
        <div className="lista-container">
          <EmployeeClientList clients={clientList} getClients={getClients} />
        </div>
      </div>
      <Footer />
    </>
  )
}

const mapStateToProps = state => {
  return {
    clients: state.clients.clients,
    employees: state.employees.employees,
    logged: state.login.login,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { ...clientsActions, ...employeesActions, ...loginActions },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(PanelEmpleado)

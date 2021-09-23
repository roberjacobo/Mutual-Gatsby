import React, { useEffect, useState } from "react"
import { Link, navigate } from "gatsby"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as clientsActions from "../redux/actions/clients"
import * as loginActions from "../redux/actions/login"

import ClientsList from "../components/clientsList"
import RegistroPago from "../components/registroPago"
import Fichatotales from "../components/fichatotales"
import HeaderMutual from "../components/header-mutual"

import FormControl from "react-bootstrap/FormControl"

import "../styles/mutual.css"
import SearchIcon from '../icons/zoom.svg';
import ChevRight from '../icons/chevron-right.svg';
import ChevLeft from '../icons/chevron-left.svg';

function Mutual({
  //actions
  clients,
  getClients,
  logged,
  logout,
  deleteClient,
  getClientsAmount,
  clientsTotalAmount,
  postChargeToClients,
  //props data
  location,
}) {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const clientList = clients ? clients.clients : [];

  useEffect(() => {
    if (logged.rol !== "ADMIN_ROLE") navigate("/panelEmpleado");
    getClients(search, page);
    getClientsAmount();
  }, []);

  const getClientsSearch = async (page, search) => {
    setPage(1);
    await getClients(search, page);
  }


  const nextPage = async (page, search) => {
    setPage(page + 1);
    await getClients(search, page);
  }

  const previousPage = async (page, search) => {
    setPage(page - 1);
    await getClients(search, page);
  }

  useEffect(() => {
    const { ok } = logged
    if (!ok) {
      navigate("/loginPage/")
    }
  }, [logged])
  return (
    <div className="container">
      <HeaderMutual logout={logout} />
      <div className="form-container"></div>
      <Fichatotales
          totalClients={clients.totalClients}
          clientsTotalAmount={clientsTotalAmount}
          postChargeToClients={postChargeToClients}
        />
      <div className="filter row">
        <div className="search-field col-9">
          <SearchIcon className="khahaha"/>
          <FormControl placeholder="Buscar clientes..." onChange={e => setSearch(e.target.value)} />
          <button style={{marginTop: '-4px;'}} className="btn btn-dark" onClick={() => getClientsSearch(page, search)}>Buscar</button>
        </div>
        <div className="pagination-field col-3">
          {page > 1 ? (
            <button onClick={() => previousPage(page, search)}><ChevLeft /></button>
          ) : null}
          <span>Página {' '}{page}</span>
          {page !== clients.totalPages ? (
            <button onClick={() => nextPage(page, search)}><ChevRight /></button>
          ) : null}
        </div>
      </div>
      <div className="list">
        <ClientsList clients={clientList} deleteClient={deleteClient} />
      </div>
    </div>
  )
}


const mapStateToProps = state => {
  console.log(state)
  return {
    clients: state.clients.clients,
    clientsTotalAmount: state.clients.clientsTotalAmount,
    logged: state.login.login,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...clientsActions, ...loginActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Mutual)

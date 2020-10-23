import React, { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
import axios from "../http-common"

const defaultState = {
  clients: [
    {
      id: 1,
      name: "Cliente 1",
      PrimerApellido: "apellido",
      SegundoApellido: "2apellido",
      Curp: "123456789",
      Colonia: "Nueva Luneta",
      Direccion: "Holanda 1212",
      Celular: 3511338809,
      Teléfono: 3511338810,
      Correo: "robjacobox@gmail.com",
      Adeudo: 52,
      Fecha: "2020-10-08",
      Tipo: 1,
    },
    { id: 2, name: "Cliente 2" },
    { id: 3, name: "Cliente 3" },
  ],
}

//Create Context
export const GlobalContext = React.createContext(defaultState)

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, defaultState)

  //Actions
  const removeClient = id => {
    dispatch({
      type: "REMOVE_CLIENT",
      payload: id,
    })
  }

  const addClient = client => {
    dispatch({
      type: "ADD_CLIENT",
      payload: client,
    })
  }

  const editClient = client => {
    dispatch({
      type: "EDIT_CLIENT",
      payload: client,
    })
  }

  const readAllClients = client => {
    axios
      .get("http://localhost:3000/api/clients/")
      .then(
        dispatch({
          type: "READ_CLIENTS",
          payload: client,
        })
      )
      .catch(console.log("error"))
  }

  return (
    <GlobalContext.Provider
      value={{
        clients: state.clients,
        removeClient,
        addClient,
        readAllClients,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

//Clients
/* function addClient(clients) {
  axios
    .get(`http://localhost:3000/api/clients`)
    .then(
      dispatch({
        type: "ADD_CLIENT",
        payload: clients,
      })
    )
    .catch()
} */

//Employees
/* function removeEmployee(id) {
    axios
      .delete(`http://localhost:3000/api/${id}`)
      .then(
        dispatch({
          type: "REMOVE_EMPLOYEE",
          payload: id,
        })
      )
      .catch()
  }

  function addEmployee(employees) {
    axios
      .post(`http://localhost:3000/api/employee`)
      .then(
        dispatch({
          type: "ADD_EMPLOYEE",
          payload: employees,
        })
      )
      .catch()
  }

  function updateEmployee(employees) {
    dispatch({
      type: "UPDATE_EMPLOYEES",
      payload: employees,
    })
  }

  } */

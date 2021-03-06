import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
  READ_CLIENTS_TOTAL_AMOUNT,
  EDIT_CLIENT_AMOUNT,
} from "../actionTypes"

import axios from "axios"


//Lectura de clientes
const parseClients = data => ({
  type: READ_ALL_CLIENTS,
  payload: data,
})

export const getClients = str => async dispatch => {
  const busqueda = str || ""
  const response = await axios.get(
    `http://localhost:3000/api/clients?searchText=${busqueda}`
  )
  const { data } = response
  return dispatch(parseClients(data))
}

// Lectura de adeudo total de clientes (socios)
const readClientsAmount = data => ({
  type: READ_CLIENTS_TOTAL_AMOUNT,
  payload: data,
})

export const getClientsAmount = () => async dispatch => {
  const response = await axios.get(
    `http://localhost:3000/api/clients/clientsAmount`
  )
  const { data } = response
  return dispatch(readClientsAmount(data))
}

//Actualizar clientes
const editClients = data => ({
  type: EDIT_CLIENT,
  payload: data,
})

export const editClient = dato => async dispatch => {
  const UserId = dato.UserId
  const response = await axios({
    url: `http://localhost:3000/api/clients/${UserId}`,
    method: "PUT",
    headers,
    data: dato,
  })
  const { data } = response
  alert(response.data.status)
  // return dispatch(editClients(data))
}

//aumentar cantidad al monto de todos los clientes
/* const postChargeToClients = cantidadACobrar => ({
  type: POST_CHARGES_TO_CLIENTS,
  payload: cantidadACobrar
}) */

export const postChargeToClients = datosCobro => async dispatch => {
  /* const {aumentoCantidad} = datosCobro */
  if (datosCobro.cantidadACobrar !== 0) {
    const response = await axios({
      url: `http://localhost:3000/api/clients/postChargesToClients`,
      method: "POST",
      headers,
      data: datosCobro,
    })
    return response;
  } else {
    alert("Debes ingresar un monto.");
  }
}

//Actualizar el monto de un cliente específico
const editClientAmount = data => ({
  type: EDIT_CLIENT_AMOUNT,
  payload: data,
})

export const editClientsAmount = datos => async dispatch => {
  const UserId = datos.UserId
  const response = await axios({
    url: `http://localhost:3000/api/clients/editClientAmount/${UserId}`,
    method: "PUT",
    headers,
    data: datos,
  })
  const { data } = response
  //return dispatch(editClientAmount(data))
}

//Ingresar nuevos clientes
  const addNewClient = data => ({
    type: ADD_CLIENT,
    payload: data,
  })

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}

export const addClient = data => async dispatch => {
  const reqObj = {
    url: "http://localhost:3000/api/clients/",
    method: "POST",
    headers,
    data,
  }
  const response = await axios(reqObj)
  alert(response.data.status)
  dispatch(addNewClient([]))
  return getClients
}

//Eliminar cliente 
const deleteClients = data => ({
  type: DELETE_CLIENT,
  payload: data,
})

export const deleteClient = _Id => async dispatch => {
  console.log(_Id)
  const response = await axios({
    url: `http://localhost:3000/api/clients/${_Id}`,
    method: "DELETE",
    headers,
    data: { datos },
  })
  const { datos } = response
  alert(response.data.status)

  return dispatch(deleteClients(datos))
}

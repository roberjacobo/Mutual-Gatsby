import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  /* EDIT_CLIENT, */
  DELETE_CLIENT,
  READ_CLIENTS_TOTAL_AMOUNT,
  EDIT_CLIENT_AMOUNT,
} from "../actionTypes"

import axios from "axios"

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}


//Lectura de clientes
const parseClients = data => ({
  type: READ_ALL_CLIENTS,
  payload: data,
})

export const getClients = (searchText, page) => async dispatch => {
  const response = await axios({
    url: `https://backend-yuy6unuyba-uw.a.run.app/api/clients/clients`,
    method: "POST",
    headers,
    data: { searchText, page },
  })
  let data = response;
  return dispatch(parseClients(data));
}


// Lectura de adeudo total de clientes (socios)
const readClientsAmount = data => ({
  type: READ_CLIENTS_TOTAL_AMOUNT,
  payload: data,
})

export const getClientsAmount = () => async dispatch => {
  const response = await axios.get(
    `https://backend-yuy6unuyba-uw.a.run.app/api/clients/clientsAmount`
  )
  let { data } = response
  return dispatch(readClientsAmount(data))
}

//Actualizar clientes
/* const editClients = data => ({
  type: EDIT_CLIENT,
  payload: data,
}) */

export const editClient = dato => async dispatch => {
  const UserId = dato.UserId
  const response = await axios({
    url: `https://backend-yuy6unuyba-uw.a.run.app/api/clients/${UserId}`,
    method: "PUT",
    headers,
    data: dato,
  })
  //const { data } = response 
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
      url: `https://backend-yuy6unuyba-uw.a.run.app/api/clients/postChargesToClients`,
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
    url: `https://backend-yuy6unuyba-uw.a.run.app/api/clients/editClientAmount/${UserId}`,
    method: "PUT",
    headers,
    data: datos,
  })
  let { data } = response
  //return dispatch(editClientAmount(data))
}

//Ingresar nuevos clientes
  const addNewClient = data => ({
    type: ADD_CLIENT,
    payload: data,
  })



export const addClient = data => async dispatch => {
  const reqObj = {
    url: "https://backend-yuy6unuyba-uw.a.run.app/api/clients/",
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
  const response = await axios({
    url: `https://backend-yuy6unuyba-uw.a.run.app/api/clients/${_Id}`,
    method: "DELETE",
    headers,
    data: { datos },
  })
  let { datos } = response
  alert(response.data.status)

  return dispatch(deleteClients(datos))
}

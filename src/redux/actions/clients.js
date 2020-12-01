import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
} from "../actionTypes"

import axios from "axios"


//Lectura de clientes
const parseClients = data => ({
  type: READ_ALL_CLIENTS,
  payload: data,
})

export const getClients = () => async dispatch => {
  const response = await axios.get("http://localhost:3000/api/clients")
    const { data } = response
    return dispatch(parseClients(data))
  }

//Actualizar clientes
const editClients = data => ({
  type: EDIT_CLIENT,
  payload: data,
})

export const editClient = data => async dispatch => {
  const response = await axios({
    url: "http://localhost:3000/api/clients/",
    method: "PUT",
    headers,
    data,
  })
  const { data } = response
  alert(response.data.status)
  return dispatch(editClients(data))
}
  //Ingresar nuevos clientes
  const addNewClient = data => ({
    type: ADD_CLIENT,
    payload: data,
  })

const headers = {
  "Content-Type": "application/json",
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
    data: { data },
  })
  console.log("arre: "  +  response)
  const { data } = response
  return dispatch(deleteClients(data))
}

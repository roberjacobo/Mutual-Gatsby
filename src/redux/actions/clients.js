import { READ_ALL_CLIENTS, ADD_CLIENT, EDIT_CLIENT } from "../actionTypes"
import axios from "axios"


//Lectura de clientes
const parseClients = data => ({
  type: READ_ALL_CLIENTS,
  payload: data,
})

export const getClients = () => async dispatch => {
  const response = await axios.get(
    "https://backend-yuy6unuyba-uw.a.run.app/api/clients"
  )
    const { data } = response
    return dispatch(parseClients(data))
  }

  //Actualizar clientes
  const editClients = data => ({
    type: EDIT_CLIENT,
    payload: data,
  })
  
 /*  export const editClient = () = */
  
  
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
    url: "https://backend-yuy6unuyba-uw.a.run.app/api/clients",
    method: "POST",
    headers,
    data,
  }
  const response = await axios(reqObj)
  alert(response.data.status)
  dispatch(addNewClient([]))
  return getClients
}
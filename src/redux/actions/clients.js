import { READ_ALL_CLIENTS, ADD_CLIENT } from "../actionTypes"
import axios from "axios"

const parseClients = data => ({
  type: READ_ALL_CLIENTS,
  payload: data,
})

export const getClients = () => async dispatch => {
  const response = await axios.get("http://localhost:3000/api/clients")
  const { data } = response
  return dispatch(parseClients(data))
}

export const addClient = () => async dispatch => {
  const reqObj = {
    url: "http://localhost:3000/api/clients",
    method: "POST",
    headers,
    data: {},
  }
  const reqObj = await axios(reqObj)
}

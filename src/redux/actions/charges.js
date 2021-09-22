import {
  READ_ALL_CHARGES,
  ADD_CHARGE,
  EDIT_CHARGE,
  DELETE_CHARGE,
} from "../actionTypes"

import axios from "axios"

//Lectura de pagos hechos por los clientes
const parseCharges = data => ({
  type: READ_ALL_CHARGES,
  payload: data,
})

export const getCharges = str => async dispatch => {
  const busqueda = str || ""
  const response = await axios.get(
    `https://backend-yuy6unuyba-uw.a.run.app/api/charges/?q=${busqueda}`
  )
  const { data } = response
  return dispatch(parseCharges(data))
}

//Ingresar nuevos pagos hechos por los clientes
const addNewCharge = data => ({
  type: ADD_CHARGE,
  payload: data,
})

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}

export const addCharge = data => async dispatch => {
  const reqObj = {
    url: "https://backend-yuy6unuyba-uw.a.run.app/api/charges/",
    method: "POST",
    headers,
    data,
  }
  const response = await axios(reqObj)
  alert(response.data.status)
  dispatch(addNewCharge([]))
  return getCharges
}

//Actualizar pagos hechos por los socios
const editCharges = data => ({
  type: EDIT_CHARGE,
  payload: data,
})

export const editCharge = data => async dispatch => {
  const response = await axios({
    url: "https://backend-yuy6unuyba-uw.a.run.app/api/charges/",
    method: "PUT",
    headers,
    data,
  })
  const { data } = response
  alert(response.data.status)
  return dispatch(editCharges(data))
}

//Eliminar pago hecho por los socios
const deleteCharges = data => ({
  type: DELETE_CHARGE,
  payload: data,
})

export const deleteCharge = _Id => async dispatch => {
  console.log(_Id)
  const response = await axios({
    url: `https://backend-yuy6unuyba-uw.a.run.app/api/charges/${_Id}`,
    method: "DELETE",
    headers,
    data: { datos },
  })
  const { datos } = response
  alert(response.data.status)

  return dispatch(deleteCharges(datos))
}

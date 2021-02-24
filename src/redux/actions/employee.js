import {
  READ_ALL_EMPLOYEES,
  ADD_EMPLOYEE,
  EDIT_EMPLOYEE,
  DELETE_EMPLOYEE,
} from "../actionTypes"

import axios from "axios"

const headers = {
  "Content-Type": "application/json",
}

//Lectura de empleados
const parseEmployees = data => ({
  type: READ_ALL_EMPLOYEES,
  payload: data,
})

export const getEmployees = str => async dispatch => {
  const busqueda = str || ""
  const response = await axios.get(
    `http://localhost:3000/api/employees?q=${busqueda}`
  )
  const { data } = response
  return dispatch(parseEmployees(data))
}

//Actualizar empleado
const editEmployees = data => ({
  type: EDIT_EMPLOYEE,
  payload: data,
})

export const editEmployee = dato => async dispatch => {
  const EmployeeId = dato.EmployeeId
  const response = await axios({
    url: `http://localhost:3000/api/employees/${EmployeeId}`,
    method: "PUT",
    headers,
    data: dato,
  })
  const { data } = response
  alert(response.data.status)
  // return dispatch(editClients(data))
}

//Ingresar nuevos empleados
const addNewEmployee = data => ({
  type: ADD_EMPLOYEE,
  payload: data,
})


export const addEmployee = data => async dispatch => {
  const reqObj = {
    url: "http://localhost:3000/api/employees/",
    method: "POST",
    headers,
    data,
  }
  const response = await axios(reqObj)
  alert(response.data.status)
  dispatch(addNewEmployee([]))
  return getEmployees
}

//Eliminar empleado
const deleteEmployees = data => ({
  type: DELETE_EMPLOYEE,
  payload: data,
})

export const deleteEmployee = _id => async dispatch => {
  console.log(_id)
  const response = await axios({
    url: `http://localhost:3000/api/employees/${_id}`,
    method: "DELETE",
    headers,
    data: { datos },
  })
  const { datos } = response
  alert(response.data.status)

  return dispatch(deleteEmployees(datos))
}



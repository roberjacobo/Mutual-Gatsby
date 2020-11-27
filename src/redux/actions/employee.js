import { LOGIN, LOGOUT } from "../actionTypes"
import axios from "axios"

const loginIn = data => ({
  type: LOGIN,
  payload: data,
})

const logOut = () => ({
  type: LOGOUT,
})

const headers = {
  "Content-Type": "application/json",
}

export const login = loginData => async dispatch => {
  const loginObj = {
    url: "http://localhost:3000/api/login",
    method: "POST",
    headers,
    data: loginData,
  }
  const response = await axios(loginObj)
  const { data } = response
  dispatch(loginIn(data))
  return response
}

export const logout = () => async dispatch => dispatch(logOut())

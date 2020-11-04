import { ADD_CLIENTE, TOGGLE_CLIENTE, SET_FILTER } from "./actionTypes"

let nextClienteId = 0

export const addCliente = content => ({
  type: ADD_CLIENTE,
  payload: {
    id: ++nextClienteId,
    content,
  },
})

export const toggleCliente = id => ({
  type: TOGGLE_CLIENTE,
  payload: { id },
})

export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } })

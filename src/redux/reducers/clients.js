import { READ_ALL_CLIENTS, ADD_CLIENT } from "../actionTypes"

const initialState = {
  clients: [],
}

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ALL_CLIENTS:
      const newState = {
        clients: action.payload,
      }
      return newState
    case ADD_CLIENT:
      const newState2 = {
        clients: action.payload,
      }
      return state
    default:
      return state
  }
}

export default clientsReducer

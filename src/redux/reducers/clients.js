import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
} from "../actionTypes"

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
      const newAddState = {
        clients: action.payload,
      }
      return newAddState
    case DELETE_CLIENT:
      return { clients: action.payload }
    case EDIT_CLIENT:
      return { clients: action.payload }
    default:
      return state
  }
}

export default clientsReducer

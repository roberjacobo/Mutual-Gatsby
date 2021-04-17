import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  EDIT_CLIENT,
  DELETE_CLIENT,
  READ_CLIENTS_TOTAL_AMOUNT,
  EDIT_CLIENT_AMOUNT,
  POST_CHARGES_TO_CLIENTS,
} from "../actionTypes"

const initialState = {
  clients: [],
  clientsTotalAmount: 0,
}

const clientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ALL_CLIENTS:
      const newState = {
        clients: action.payload,
        clientsTotalAmount: state.clientsTotalAmount,
      }
      return newState
    case READ_CLIENTS_TOTAL_AMOUNT:
      const newReadAmountState = {
        clientsTotalAmount: action.payload,
        clients: state.clients,
      }
      return newReadAmountState
    case ADD_CLIENT:
      const newAddState = {
        clients: action.payload,
      }
      return newAddState
    case DELETE_CLIENT:
      return { ...state }
  /*    case POST_CHARGES_TO_CLIENTS:
      return  */
    default:
      return state
  }
}

export default clientsReducer

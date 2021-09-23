import {
  READ_ALL_CLIENTS,
  ADD_CLIENT,
  /*   EDIT_CLIENT, */
  DELETE_CLIENT,
  READ_CLIENTS_TOTAL_AMOUNT,
  /*   EDIT_CLIENT_AMOUNT,
    POST_CHARGES_TO_CLIENTS, */
  /*  GET_CLIENTS_COUNT, */
} from "../actionTypes"

const initialState = {
  clients: {
    data: {
    clients: [],
    clientsCountSearch: 0,
    totalClients: 0,
    totalPages: 0,
  },
  clientsTotalAmount: 0,
    clientsCount: 0,
  }
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
        clients: state.clients,
        clientsTotalAmount: action.payload,
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
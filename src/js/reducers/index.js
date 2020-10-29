import { ADD_CLIENT } from "../../constants/action-types"

const initialState = {
  clients: [],
}

function rootReducer(state = initialState, action) {
  if (action.type === ADD_CLIENT) {
    return Object.assign({}, state, {
      clients: state.clients.concat(action.payload),
    })
  }
  return state
}

export default rootReducer

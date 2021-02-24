import { LOGIN, LOGOUT } from "../actionTypes"

const initialState = {
  login: {},
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        login: action.payload,
      }
    case LOGOUT:
      return {
        login: {},
      }
    default:
      return state
  }
}

export default loginReducer

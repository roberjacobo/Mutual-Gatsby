import { LOGIN, LOGOUT } from "../actionTypes"

const initialState = {
  employees: {},
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        employees: action.payload,
      }
    case LOGOUT:
      return {
        employees: {},
      }
    default:
      return state
  }
}

export default employeesReducer

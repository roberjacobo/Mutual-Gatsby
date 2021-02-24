import { 
  DELETE_EMPLOYEE, 
  ADD_EMPLOYEE, 
  READ_ALL_EMPLOYEES,
  EDIT_EMPLOYEE
} from "../actionTypes"

const initialState = {
  employees: [],
}

const employeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ALL_EMPLOYEES:
      const newState = {
        employees: action.payload,
      }
      return newState
    case ADD_EMPLOYEE:
      const newAddState = {
        ...state,
      }
      return newAddState
    case DELETE_EMPLOYEE:
      return { ...state }
    default:
      return state
  }
}

export default employeesReducer

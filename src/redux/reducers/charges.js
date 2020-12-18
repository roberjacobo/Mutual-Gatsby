import {
  READ_ALL_CHARGES,
  EDIT_CHARGE,
  DELETE_CHARGE,
  ADD_CHARGE,
} from "../actionTypes"

const initialState = {
  charges: [],
}

const chargesReducer = (state = initialState, action) => {
  switch (action.type) {
    case READ_ALL_CHARGES:
      const newState = {
        charges: action.payload,
      }
      return newState
    case ADD_CHARGE:
      const newAddState = {
        charges: action.payload,
      }
      return newAddState
    case DELETE_CHARGE:
      return { ...state }
    case EDIT_CHARGE:
      return { charges: action.payload }
    default:
      return state
  }
}

export default chargesReducer

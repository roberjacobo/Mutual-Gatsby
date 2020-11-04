import { ADD_CLIENTE, TOGGLE_CLIENTE } from "../actionTypes"

const initialState = {
  allIds: [],
  byIds: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_CLIENTE: {
      const { id, content } = action.payload
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      }
    }
    case TOGGLE_CLIENTE: {
      const { id } = action.payload
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      }
    }
    default:
      return state
  }
}

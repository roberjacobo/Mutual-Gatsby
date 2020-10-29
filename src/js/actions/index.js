import { ADD_CLIENT } from "../constants/action-types"

export function addClient(payload) {
  return { type: ADD_CLIENT, payload }
}

export default (state, action) => {
  switch (action.type) {
    case "READ_EMPLOYEES":
      return {}
    case "REMOVE_CLIENT":
      return {
        clients: state.clients.filter(client => {
          return client.id !== action.payload
        }),
      }
    case "ADD_CLIENT":
      return {
        clients: [action.payload, ...state.clients],
      }
    case "EDIT_CLIENT":
      const updateClient = action.payload

      const updatedClient = state.clients.map(client => {
        if (client.id === updatedClient.id) {
          return updatedClient
        }
        return client
      })
      return {
        clients: updateClient,
      }
    default:
      return state
  }
}

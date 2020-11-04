import { VISIBILITY_FILTERS } from "../constants"

export const getClientesState = store => store.clientes

export const getTodoList = store =>
  getClientesState(store) ? { ...getClientesState(store).byIds[id], id } : {}

  /* Ejemplo de un selector un poco más complejo */
export const getClientes = store => 
getClienteList(store).map(id => getClientedById(store, id))

export const getClientesByVisibilityFilter = (store, visibilityFilter) => {
  const allClientes = getClientes(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allClientes.filter(cliente => cliente.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allClientes.filter(cliente => !cliente.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allClientes
  }
}
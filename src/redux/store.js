import { createStore, combineReducers, applyMiddleware } from "redux"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"
import clients from "./reducers/clients"
import employees from "./reducers/employee"
import charges from "./reducers/charges"

const rootReducer = combineReducers({
  clients: clients,
  employees: employees,
  charges: charges,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const reduxDevTools = (() => {
  if (typeof window !== "undefined" && window._REDUX_DEVTOOLS_EXTENSION_) {
    return window._REDUX_DEVTOOLS_EXTENSION_()
  }
  return undefined
})()

export default () => {
  const middlewares = [thunk]
  const configureStore = applyMiddleware(...middlewares)(createStore)
  const store = configureStore(persistedReducer, reduxDevTools)
  const persistor = persistStore(store)
  return { store, persistor }
}

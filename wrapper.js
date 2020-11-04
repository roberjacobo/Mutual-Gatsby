import React from "react"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import configureStore from "./src/redux/store"

export default ({ element }) => {
  const { store, persistor } = configureStore()
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {element}
      </PersistGate>
    </Provider>
  )
}

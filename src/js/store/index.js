import { createStore } from "redux"
import rootReducer from "../reducers/AppReducer"

const store = createStore(rootReducer)

export default store

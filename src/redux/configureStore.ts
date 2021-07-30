import {combineReducers, createStore} from 'redux'
import reducerUser from "./store/reducers/reducerUser";
import reducerNotes from "./store/reducers/reducerNotes";

export default function configureStore(applicationState:ApplicationState) {
  const combinedReducers = combineReducers({
    loginState: reducerUser,
    notesState: reducerNotes
  })


  return createStore(combinedReducers, applicationState)
}

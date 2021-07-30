import {combineReducers, createStore, MiddlewareAPI,
  Middleware, AnyAction, Dispatch, applyMiddleware} from 'redux'
import reducerUser from "./store/reducers/reducerUser";
import reducerNotes from "./store/reducers/reducerNotes";

const logger: Middleware<Dispatch> = ({getState}: MiddlewareAPI) => {
  return next => (action: AnyAction) => {
    console.log('Will dispatch', action)

    const returnValue = next(action)

    console.log('State after dispatch', getState())

    return returnValue
  }
}

export default function configureStore(applicationState:ApplicationState) {
  const combinedReducers = combineReducers({
    loginState: reducerUser,
    notesState: reducerNotes
  })


  return createStore(combinedReducers, applicationState, applyMiddleware(logger))
}

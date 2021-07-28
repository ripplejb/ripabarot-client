import {combineReducers, createStore, MiddlewareAPI,
  Middleware, AnyAction, Dispatch, applyMiddleware,
  StoreEnhancer, StoreEnhancerStoreCreator, Action,
  PreloadedState, Reducer} from 'redux'
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

const enhancer: StoreEnhancer<{ print5: () => void }> = (
  createStore: StoreEnhancerStoreCreator
): StoreEnhancerStoreCreator<{ print5: () => void }> => <
  S = any,
  A extends Action = AnyAction
  >(
  reducer: Reducer<S, A>,
  preloadedState?: PreloadedState<S>,
) => {
  const store = createStore(reducer, preloadedState);
  const newDispatch: Dispatch<A> = action => {
    const result = store.dispatch(action);
    return result;
  };
  return {
    ...store,
    dispatch: newDispatch,
    print5() {
      console.log(5);
    }
  };
};

export default function configureStore(applicationState:ApplicationState) {
  const combinedReducers = combineReducers({
    loginState: reducerUser,
    notesState: reducerNotes
  })


  return createStore(combinedReducers, applicationState, enhancer)
}

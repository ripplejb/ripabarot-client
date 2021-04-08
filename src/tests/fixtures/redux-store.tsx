import {applyMiddleware, createStore, Store} from "redux";
import reducer from "../../redux/store/reducers/reducer";
import thunk from "redux-thunk";

export const testStore: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

export const initialNoteState = {
  notes: [
    {
      id: 1,
      note: 'Test',
      title: 'Test',
      selected: true
    }
  ]
}


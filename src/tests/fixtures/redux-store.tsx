import {applyMiddleware, createStore, Store} from "redux";
import reducerNotes from "../../redux/store/reducers/reducerNotes";
import thunk from "redux-thunk";

export const testStore: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducerNotes, applyMiddleware(thunk))

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


import * as actionTypes from "../actionTypes"
import {addNote, removeNote, selectNode} from "./reducerNotesActions";

const initialState: NoteState = {
  notes: [{id: Math.random(), note: "", title: "", selected: false}]
}

const reducerNotes = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      return addNote(state, action.note)
    case actionTypes.REMOVE_NOTE:
      return removeNote(state, action.note)
    case actionTypes.SELECT_NOTE:
      return selectNode(state, action.note)
    default:
      return state
  }
}

export default reducerNotes

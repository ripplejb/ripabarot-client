import * as actionTypes from "./actionTypes"
import {EmptyNote} from "../../types/common/common.constants";

const initialState: NoteState = {
  notes: [EmptyNote()]
}

const reducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const note = state.notes.find(n => n.id === action.note.id);
      if (note === undefined) {
        const newNote: INote = {
          id: action.note.id,
          title: action.note.title,
          note: action.note.note
        }
        return {
          ...state,
          notes: state.notes.concat(newNote)
        }
      }
      break
    case actionTypes.REMOVE_NOTE:
      const updateNotes: INote[] = state.notes.filter(
        note => note.id !== action.note.id
      )
      return {
        ...state,
        notes: updateNotes
      }
    case actionTypes.SELECT_NOTE:
      const selectedNote = state.notes.find(n => n.id === action.note.id);
        if (selectedNote !== undefined) {
          state.notes.forEach(n => {
            if (n.id === selectedNote.id) {
              n.selected = true
            } else {
              n.selected = false
            }
          })
        }
  }
  return state
}

export default reducer

import * as actionTypes from "./actionTypes"

const initialState: NoteState = {
  notes: []
}

const reducer = (
  state: NoteState = initialState,
  action: NoteAction
): NoteState => {
  switch (action.type) {
    case actionTypes.ADD_NOTE:
      const newNote: INote = {
        id: action.note.id,
        title: action.note.title,
        note: action.note.note
      }
      const note = state.notes.find(n => n.id === newNote.id);
      if (note === undefined) {
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
  }
  return state
}

export default reducer

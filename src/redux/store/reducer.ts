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
        id: Math.random(),
        title: action.note.title,
        note: action.note.note
      }
      return {
        ...state,
        notes: state.notes.concat(newNote)
      }
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

import * as actionTypes from "../actionTypes"
import {EmptyNote} from "../../../types/common/common.constants";
import {addNote, removeNote, selectNode} from "./reducerActions";

const initialState: NoteState = {
  notes: [EmptyNote()]
}

const reducer = (
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
  }
  return state
}

export default reducer

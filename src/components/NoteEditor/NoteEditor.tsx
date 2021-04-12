import * as React from "react";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent, TextField, Typography} from "@material-ui/core";
import {SELECT_NOTE} from "../../redux/store/actionTypes";
import {cardContainer, cardStyle} from "./NoteEditorStyles";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const ERROR = 'ERROR'
  const NOTE_PLACEHOLDER = 'Type note here.'
  const VIEW_PLACEHOLDER = 'Click here to start taking note.'

  const getNote = (id: number, state: NoteState) => state.notes.find(n => n.id === id) ?? {
    id: -2,
    note: ERROR,
    title: "",
    selected: false
  }

  const currentNote = useSelector<NoteState, INote>(state => getNote(props.id, state))

  const dispatch = useDispatch()

  const isSelected = useSelector<NoteState, boolean | undefined>(state => {
    const foundNote = getNote(currentNote.id, state);
    return (foundNote.id === -2) ? false : foundNote.selected;
  })

  const handleNoteChange = (e: { target: { value: string; }; }) => currentNote.note = e.target.value;

  return (
    <div style={cardContainer}>
      <Card onClick={() => {
        dispatch({type: SELECT_NOTE, note: currentNote})
      }} style={cardStyle}>
        <CardContent>
          {
            isSelected
              ?
              <TextField multiline
                         placeholder={NOTE_PLACEHOLDER}
                         rows={10}
                         onChange={handleNoteChange}
                         defaultValue={currentNote.note}
              />
              :
              <Typography variant='body2' color='textSecondary' component='p'>
                {currentNote.note === '' ? VIEW_PLACEHOLDER : currentNote.note}
              </Typography>
          }
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteEditor

import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as React from "react";
import {EmptyNote} from "../../types/common/common.constants";
import {Card, CardContent, TextField, Typography} from "@material-ui/core";
import './NoteEditor.css'
import {SELECT_NOTE} from "../../redux/store/actionTypes";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const currentNote = useSelector<NoteState, INote>(state => {
    return state.notes.find(n => n.id === props.id) ?? EmptyNote()
  })

  const dispatch = useDispatch()

  const isSelected = useSelector<NoteState, boolean | undefined>(state => {
    return (state.notes.find(n => n.id === props.id) ?? EmptyNote()).selected
  })

  const handleNoteChange = (e: { target: { value: string; }; }) => {
    currentNote.note = e.target.value;
    if (currentNote.id === -1 && currentNote.note !== "") {
      currentNote.id = Math.random()
    }
  }

  const editField = () => <TextField multiline
                            placeholder='Type note here.'
                            rows={10}
                            onChange={handleNoteChange} />

  const viewField = () => <Typography variant="body2" color="textSecondary" component="p" >
    {currentNote.note === "" ? "Click here to start taking note." : currentNote.note}
  </Typography>

  const cardContent = () => isSelected ? editField() : viewField()

  return (
    <div className='card-container'>
      <Card onClick={() => {dispatch({type: SELECT_NOTE, note: currentNote})}}>
        <CardContent>
          {cardContent()}
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteEditor

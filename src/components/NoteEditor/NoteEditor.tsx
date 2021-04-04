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
    let foundNode = state.notes.find(n => n.id === props.id)
    if (foundNode === undefined) {
      foundNode = EmptyNote();
      foundNode.note = 'ERROR'
    }
    return foundNode
  })

  const dispatch = useDispatch()

  const isSelected = useSelector<NoteState, boolean | undefined>(state => {
    let foundNode = state.notes.find(n => n.id === currentNote.id);
    if (foundNode === undefined) {
      currentNote.note = 'ERROR'
      return false;
    };
    return foundNode.selected;
  })

  const handleNoteChange = (e: { target: { value: string; }; }) => {
    currentNote.note = e.target.value;
  }

  const editField = () => <TextField multiline
                            placeholder='Type note here.'
                            rows={10}
                            onChange={handleNoteChange}
                            defaultValue={currentNote.note}
                            />

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

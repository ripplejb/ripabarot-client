import * as React from "react";
import {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Card, CardContent, TextField, Typography} from "@material-ui/core";
import './NoteEditor.css'
import {SELECT_NOTE} from "../../redux/store/actionTypes";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const ERROR = 'ERROR'
  const NOTE_PLACEHOLDER = 'Type note here.'
  const VIEW_PLACEHOLDER = 'Click here to start taking note.'
  const EmptyNote = () => {
    return {id: -2, note: "", title: "", selected: false}
  }

  const getNode = (id: number, state: NoteState) => {
    let foundNode = state.notes.find(n => n.id === id)
    if (foundNode === undefined) {
      foundNode = EmptyNote();
      foundNode.note = ERROR
    }
    return foundNode
  }

  const currentNote = useSelector<NoteState, INote>(state => getNode(props.id, state))

  const dispatch = useDispatch()

  const isSelected = useSelector<NoteState, boolean | undefined>(state => {
    let foundNode = getNode(currentNote.id, state);
    return (foundNode.id === -2) ? false : foundNode.selected;
  })

  const handleNoteChange = (e: { target: { value: string; }; }) => {
    currentNote.note = e.target.value;
  }

  const editField = () => <TextField multiline
                                     placeholder={NOTE_PLACEHOLDER}
                                     rows={10}
                                     onChange={handleNoteChange}
                                     defaultValue={currentNote.note}
  />

  const viewField = () => <Typography variant='body2' color='textSecondary' component='p' >
    {currentNote.note === '' ? VIEW_PLACEHOLDER : currentNote.note}
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

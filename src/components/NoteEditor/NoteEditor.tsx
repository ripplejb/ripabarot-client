import * as React from "react";
import {FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography
} from "@material-ui/core";
import {REMOVE_NOTE, SELECT_NOTE} from "../../redux/store/actionTypes";
import {cardCloseButtonsStyle, cardContainer, cardStyle} from "./NoteEditorStyles";
import {CancelSharp} from "@material-ui/icons";

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
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()

  const isSelected = useSelector<NoteState, boolean | undefined>(state => {
    const foundNote = getNote(currentNote.id, state);
    return (foundNote.id === -2) ? false : foundNote.selected;
  })

  const handleRemove = () => {
    setOpen(true);
  }
  const handleClose = (result: boolean) => {
    if (result) {
      dispatch({type: REMOVE_NOTE, note: currentNote})
    }
    setOpen(false);
  }

  const handleNoteChange = (e: { target: { value: string; }; }) => currentNote.note = e.target.value;

  return (
    <>
      <Dialog open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Note"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {"Are you sure you want to delete the note?"}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            {currentNote.note}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(true)} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <div style={cardContainer}>
        <div style={cardCloseButtonsStyle}>
          <IconButton size='small' color='secondary' disabled={!isSelected} onClick={handleRemove}>
            <CancelSharp/>
          </IconButton>
        </div>
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
    </>
  )
}

export default NoteEditor

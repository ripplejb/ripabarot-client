import {TextArea, Button, Card, CardBody, TextAreaProps} from "@fluentui/react-northstar";
import {FormEvent, FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_NOTE} from "../redux/store/actionTypes";
import * as React from "react";
import {EmptyNote} from "../types/common/common.constants";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const currentNote = useSelector<NoteState, INote>(state => {
    return state.notes.find(n => n.id === props.id) ?? EmptyNote
  })
  const dispatch = useDispatch();

  const [note, setNote] = useState(() => currentNote ?? EmptyNote)

  const onSave = () => {
    dispatch({type: ADD_NOTE, note: note})
  }

  const handleNoteChange = (e: FormEvent, prop: TextAreaProps | undefined) => {
    setNote(prev => {
      if (prev.note !== prop?.value) {
        note.note = prop?.value ?? ''
      }
      if (prev.id === -1) {
        prev.id = Math.random()
      }
      return note;
    })
  }

  return (
    <Card>
      <CardBody>
        <TextArea fluid placeholder="Type Here..."
                  resize={"vertical"}
                  onChange={handleNoteChange}
                  defaultValue={currentNote.note ?? ''}
        />
        <Button content='Save' onClick={onSave}/>
      </CardBody>
    </Card>
  )
}

export default NoteEditor

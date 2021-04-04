import {FC, useState} from "react";
import {useSelector} from "react-redux";
import * as React from "react";
import {EmptyNote} from "../types/common/common.constants";
import {Card, CardContent, TextField} from "@material-ui/core";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const currentNote = useSelector<NoteState, INote>(state => {
    return state.notes.find(n => n.id === props.id) ?? EmptyNote()
  })
  const [note, setNote] = useState(() => currentNote)

  const handleNoteChange = (e: { target: { value: string; }; }) => {
    setNote(prev => {
      if (prev.note !== e.target.value) {
        note.note = e.target.value ?? ''
      }
      if (prev.id === -1) {
        prev.id = Math.random()
      }
      return note;
    })
  }

  return (
    <Card>
      <CardContent>
        <TextField multiline
                   placeholder='Type note here.'
                   rows={10}
                   onChange={handleNoteChange}
        />
      </CardContent>
    </Card>
  )
}

export default NoteEditor

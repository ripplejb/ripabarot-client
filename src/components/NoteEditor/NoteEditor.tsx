import {FC} from "react";
import {useSelector} from "react-redux";
import * as React from "react";
import {EmptyNote} from "../../types/common/common.constants";
import {Card, CardContent, TextField} from "@material-ui/core";
import './NoteEditor.css'

type Props = {
  id: number
}

const NoteEditor: FC<Props> = (props) => {

  const currentNote = useSelector<NoteState, INote>(state => {
    return state.notes.find(n => n.id === props.id) ?? EmptyNote()
  })

  const handleNoteChange = (e: { target: { value: string; }; }) => {
    currentNote.note = e.target.value;
    if (currentNote.id === -1 && currentNote.note !== "") {
      currentNote.id = Math.random()
    }
  }

  return (
    <div className='card-container'>
      <Card>
        <CardContent>
          <TextField multiline
                     placeholder='Type note here.'
                     rows={10}
                     onChange={handleNoteChange}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default NoteEditor

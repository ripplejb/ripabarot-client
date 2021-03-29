import {TextArea, Button, Card, CardBody, Label, TextAreaProps} from "@fluentui/react-northstar";
import {FormEvent, FC, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_NOTE} from "../redux/store/actionTypes";
import * as React from "react";

type Props = {
  id: number
}

const NoteEditor: FC<Props> = () => {

  const [note, setNote] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const dispatch = useDispatch();

  const saveNoteAsync = (n: INote) =>
    new Promise<void>(res => {
      dispatch({type: ADD_NOTE, note: n})
      return setTimeout(res, 1000)
    });

  const onSave = async (e: FormEvent) => {
    e.preventDefault()
    setStatus("Saving...")
    await saveNoteAsync(getNewNote)
    setStatus("Saved.")
  }

  const getNewNote = {id: -1, note: note, title: ""}

  const handleChange = (event: React.SyntheticEvent<HTMLElement>, data?: TextAreaProps) =>
  {
    setNote(prev => data?.value ?? "")
  }

  return (
    <Card>
      <CardBody>
        <TextArea fluid placeholder="Type Here..." onChange={handleChange}/>
        <Button content='Save' onClick={onSave}/>
        <Label content={status}/>
      </CardBody>
    </Card>
  )
}

export default NoteEditor

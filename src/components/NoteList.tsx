import React, {FC} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_NOTE} from "../redux/store/actionTypes";
import {EmptyNote} from "../types/common/common.constants";
import './NoteList.css'
import {IconButton} from "@material-ui/core";
import {AddCircleOutlineRounded} from "@material-ui/icons"

type NoteListProps = {
  render(id: number): void
}

const NoteList: FC<NoteListProps> = (props) => {

  const notes = useSelector<NoteState, INote[]>(state => state.notes)

  const listItem = notes.map(note => props.render(note.id));

  const dispatch = useDispatch()
  const onAddNewNote = () => {
    dispatch({type: ADD_NOTE, note: EmptyNote()})
  }

  return (
    <div>
      <IconButton
              onClick={() =>
                onAddNewNote()}>
        <AddCircleOutlineRounded/>
      </IconButton>
      <div className='list-container'>
        {listItem}
      </div>
    </div>
  )
}

export default NoteList;

import React, {FC} from "react";
import {IconButton} from "@material-ui/core";
import {AddCircleOutlineRounded} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {ADD_NOTE} from "../../redux/store/actionTypes";
import {EmptyNote} from "../../types/common/common.constants";

const AppMenu: FC = () => {
  const dispatch = useDispatch()
  const onAddNewNote = () => {
    const newNote = EmptyNote();
    newNote.id = Math.random()
    dispatch({type: ADD_NOTE, note: newNote})
  }

  return (
    <IconButton
      onClick={() =>
        onAddNewNote()}>
      <AddCircleOutlineRounded/>
    </IconButton>
  )
}

export default AppMenu

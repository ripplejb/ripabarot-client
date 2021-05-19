import React, {FC} from "react";
import {IconButton} from "@material-ui/core";
import {AddCircleSharp} from "@material-ui/icons";
import {useDispatch} from "react-redux";
import {ADD_NOTE} from "../../redux/store/actionTypes";

const AppMenu: FC = () => {
  const dispatch = useDispatch()
  const onAddNewNote = () => {
    dispatch({type: ADD_NOTE, note: undefined})
  }

  return (
    <IconButton style={{color: '#7777FF'}}
                onClick={() =>
                  onAddNewNote()}>
      <AddCircleSharp/>
    </IconButton>
  )
}

export default AppMenu

import React, {FC} from "react";
import AppMenu from "../Menu/AppMenu";
import NoteList from "../NoteList/NoteList";
import NoteEditor from "../NoteEditor/NoteEditor";
import Login from "../Login/Login";

const NotesApp: FC = () => {

  return (
    <>
      <Login/>
      <AppMenu/>
      <NoteList render={id => <NoteEditor id={id}/>}/>
    </>
  )
}

export default NotesApp

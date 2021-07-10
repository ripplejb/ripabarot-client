import React, {FC} from "react";
import AppMenu from "../Menu/AppMenu";
import NoteList from "../NoteList/NoteList";
import NoteEditor from "../NoteEditor/NoteEditor";
import Login from "../Login/Login";
import {useDispatch, useSelector} from "react-redux";
import {LOGIN_USER} from "../../redux/store/actionTypes";

const NotesApp: FC = () => {

  const signedIn = useSelector<LoginState, boolean>(state => state.signedIn)
  const dispatch = useDispatch()

  return (
    <>
      <AppMenu/>
      <NoteList render={id => <NoteEditor id={id}/>}/>
    </>
      // <>
      //   {
      //     signedIn
      //       ?
      //       <>
      //       <AppMenu/>
      //       <NoteList render={id => <NoteEditor id={id}/>}/>
      //       </>
      //       :
      //     <Login onSignedIn={(ul) => {
      //       dispatch({type: LOGIN_USER, userLogin: ul})
      //     }}/>
      //   }
      // </>
    )

}

export default NotesApp

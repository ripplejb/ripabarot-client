import React, {FormEvent} from 'react';
import './App.css';
import {
  Provider as FluentProvider,
  Menu, MenuItemProps, teamsDarkV2Theme
} from "@fluentui/react-northstar"
import {AddIcon} from '@fluentui/react-icons-northstar'

import {Provider} from "react-redux"
import {createStore, applyMiddleware, Store} from 'redux'
import thunk from "redux-thunk"
import reducer from "./redux/store/reducer";
import NoteEditor from "./components/NoteEditor";

const store: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

const onAddNewNote = (e: FormEvent, prop: MenuItemProps | undefined) => {
  alert("Clicked Add New.")
}

function App() {
  return (
    <FluentProvider theme={teamsDarkV2Theme}>
      <Provider store={store}>
        <Menu items={
          [
            {
              icon: <AddIcon/>,
              key: 'New Note',
              onClick: (e, props) => onAddNewNote(e, props)
            }
          ]
        }></Menu>
        <NoteEditor id={-1}/>
      </Provider>
    </FluentProvider>
  );
}


export default App;

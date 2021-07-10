import React from 'react';
import './App.css';

import '@fontsource/roboto';
import {Provider} from "react-redux"
import {combineReducers} from 'redux'
import reducerNotes from "./redux/store/reducers/reducerNotes";
import NotesApp from "./components/MainPage/NotesApp";
import reducerUser from "./redux/store/reducers/reducerUser";
import {configureStore} from "@reduxjs/toolkit";

const staticReducers = combineReducers({
  user: reducerUser,
  notes: reducerNotes
})

const store = configureStore({reducer:staticReducers})

function App() {
  return (
    <Provider store={store}>
      <NotesApp/>
    </Provider>
  );
}


export default App;

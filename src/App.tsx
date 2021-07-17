import React from 'react';
import './App.css';

import '@fontsource/roboto';
import {Provider} from "react-redux"
import NotesApp from "./components/MainPage/NotesApp";
import configureStore from "./configureStore";


const store = configureStore({loginState: {user: "", signedIn: false}, notesState:{notes: new Array<INote>()}})

function App() {
  return (
    <Provider store={store}>
      <NotesApp/>
    </Provider>
  );
}


export default App;

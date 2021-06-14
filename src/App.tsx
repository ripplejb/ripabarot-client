import React from 'react';
import './App.css';

import '@fontsource/roboto';
import {Provider} from "react-redux"
import {applyMiddleware, createStore, Store} from 'redux'
import thunk from "redux-thunk"
import reducer from "./redux/store/reducers/reducer";
import NotesApp from "./components/MainPage/NotesApp";


const store: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <NotesApp/>
    </Provider>
  );
}


export default App;

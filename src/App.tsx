import React from 'react';
import './App.css';

import '@fontsource/roboto';
import {Provider} from "react-redux"
import {createStore, applyMiddleware, Store} from 'redux'
import thunk from "redux-thunk"
import reducer from "./redux/store/reducers/reducer";
import NoteEditor from "./components/NoteEditor/NoteEditor";
import NoteList from "./components/NoteList/NoteList";
import AppMenu from "./components/Menu/AppMenu";

const store: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <AppMenu />
      <NoteList render={id => <NoteEditor id={id}/>}/>
    </Provider>
  );
}


export default App;

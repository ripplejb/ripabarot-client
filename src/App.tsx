import React from 'react';
import './App.css';
import {CommandBar, ICommandBarItemProps, initializeIcons, ThemeProvider} from "@fluentui/react";
import {darkTheme} from "./themes";

import { Provider } from "react-redux"
import { createStore, applyMiddleware, Store } from 'redux'
import thunk from "redux-thunk"
import reducer from "./redux/store/reducer";

const store: Store<NoteState, NoteAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider applyTo="body" theme={darkTheme}>
      <div className="App">
        <CommandBar
          items={_items}
        />
      </div>
    </ThemeProvider>
    </Provider>
  );
}

initializeIcons();

const _items : ICommandBarItemProps[] = [
  {
    key: 'newItem',
    text: 'New',
    cacheKey: 'newCacheKey',
    iconProps: {iconName: 'add'},
    onClick: ev => {alert('You Click New.')}
  }
]

export default App;

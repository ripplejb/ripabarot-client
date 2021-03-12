import React from 'react';
import './App.css';
import {CommandBar, ICommandBarItemProps, initializeIcons, ThemeProvider} from "@fluentui/react";
import {darkTheme} from "./themes";

function App() {
  return (
    <ThemeProvider applyTo="body" theme={darkTheme}>
      <div className="App">
        <CommandBar
          items={_items}
        />
      </div>
    </ThemeProvider>
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

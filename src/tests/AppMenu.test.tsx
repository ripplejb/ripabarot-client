import React from 'react';
import {render, screen} from '@testing-library/react';
import AppMenu from "../components/Menu/AppMenu";
import {Provider} from "react-redux";
import {testStore} from "./fixtures/redux-store";

test('Render app menu with new note button.', () => {
  render(<Provider store={testStore}><AppMenu/></Provider>);
  const linkElement = screen.getByRole(/button/);
  expect(linkElement).toBeTruthy();
});

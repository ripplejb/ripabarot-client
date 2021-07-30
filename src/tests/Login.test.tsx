import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import {testStore} from "./fixtures/redux-store";
import React from "react";
import Login from "../components/Login/Login";

describe('render login screen.', () => {
  it('should render the login screen with a username ' +
    'and password text fields', () => {
    const {container} = render(<Provider store={testStore}><Login onSignedIn={() => {}}/></Provider>)
    expect(container.innerHTML).toContain('eMail');
    expect(container.innerHTML).toContain('Password');
  })
})

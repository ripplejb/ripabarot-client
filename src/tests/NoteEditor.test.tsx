import React from 'react';
import {render} from '@testing-library/react';
import * as reactRedux from "react-redux";
import {Provider} from "react-redux";
import {initialNoteState, testStore} from "./fixtures/redux-store";
import NoteEditor from "../components/NoteEditor/NoteEditor";

describe('render note editor.', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  })
  it('should render a editable note editor', () => {
    useSelectorMock
      .mockReturnValue(initialNoteState)
    const {container} = render(<Provider store={testStore}><NoteEditor id={1}/></Provider>)
    expect(container.innerHTML).toContain('MuiTextField-root');
  })

  it('should render a view only note editor', () => {
    useSelectorMock
      .mockReturnValueOnce(initialNoteState)
      .mockReturnValueOnce(false)
    const {container} = render(<Provider store={testStore}><NoteEditor id={1}/></Provider>)
    expect(container.innerHTML).toContain('MuiTypography-root');
  })
});

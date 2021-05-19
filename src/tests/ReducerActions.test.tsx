import reducer from "../redux/store/reducers/reducer";
import {ADD_NOTE, REMOVE_NOTE} from "../redux/store/actionTypes";

describe('Reducer Tests', () => {
  it('should return the initial state', () => {
    const initialState = reducer(undefined,
      {type: "", note: {id: 0, note: '', selected: false, title: ''}})
    expect(initialState.notes.length)
      .toEqual(1)
    expect(initialState.notes[0].note)
      .toEqual("")
    expect(initialState.notes[0].title)
      .toEqual("")
    expect(initialState.notes[0].selected)
      .toEqual(false)
  })

  it('should add new note when pass ADD_NOTE action only if no other empty note existed.',
    () => {
      const initialState = {notes: [{id: Math.random(), note: "Test", title: "Test", selected: false}]}
      const newState = reducer(initialState, {type: ADD_NOTE, note: undefined})
      expect(newState.notes.length)
        .toEqual(2)
      expect(newState.notes[1].selected)
        .toEqual(true)
      expect(newState.notes[1].note)
        .toEqual('')
    })

  it('should not add new note when pass ADD_NOTE action and other empty note existed.',
    () => {
      const initialState = {
        notes: [
          {id: Math.random(), note: "", title: "", selected: false},
          {id: Math.random(), note: "Test", title: "Test", selected: true}
        ]
      }
      const newState = reducer(initialState, {type: ADD_NOTE, note: undefined})
      expect(newState.notes.length)
        .toEqual(2)
      expect(newState.notes[0].selected)
        .toEqual(true)
      expect(newState.notes[0].note)
        .toEqual('')
    })

  it('should remove note when pass REMOVE_NOTE action.',
    () => {
      const noteToRemove = {id: Math.random(), note: "Test", title: "Test", selected: false};
      const initialState = {
        notes: [
          noteToRemove,
          {id: Math.random(), note: "Test2", title: "Test2", selected: false}
        ]
      }
      const newState = reducer(initialState, {type: REMOVE_NOTE, note: noteToRemove})
      expect(newState.notes.length).toEqual(1)
      expect(newState.notes[0].note)
        .toEqual('Test2')
    }
  )
})

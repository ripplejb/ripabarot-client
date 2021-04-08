export const addNote = (noteState: NoteState, newNode: INote | undefined) => {
  const note = noteState.notes.find(n => (newNode !== undefined && n.id === newNode.id));
  if (note === undefined) {
    const emptyNoteFound = noteState.notes.find(n => n.note === '')
    if (emptyNoteFound !== undefined) {
      return selectNode(noteState, emptyNoteFound)
    }
    const newNote: INote = {
      id: Math.random(),
      title: "",
      note: ""
    }
    noteState = {
      ...noteState,
      notes: noteState.notes.concat(newNote)
    }
    return selectNode(noteState, newNode)
  } else {
    return selectNode(noteState, note)
  }
}

export const removeNote = (noteState: NoteState, newNode: INote) => {
  const updateNotes: INote[] = noteState.notes.filter(
    note => note.id !== newNode.id
  )
  return {
    ...noteState,
    notes: updateNotes
  }
}

export const selectNode = (noteState: NoteState, newNode: INote | undefined) => {
  const selectedNote = noteState.notes.find(n => (newNode !== undefined && n.id === newNode.id));
  if (selectedNote !== undefined) {
    noteState.notes.forEach(n => n.selected = n.id === selectedNote.id)
  }
  return noteState
}

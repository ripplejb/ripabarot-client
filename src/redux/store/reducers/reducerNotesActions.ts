const insertNote = (newNote: INote, noteState: NoteState) => new Array<INote>().concat(newNote).concat(noteState.notes)

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
      notes: noteState.notes.length > 0 ?
        insertNote(newNote, noteState) :
        noteState.notes.concat(newNote)
    }
    return selectNode(noteState, newNote)
  } else {
    return selectNode(noteState, note)
  }
}

export const removeNote = (noteState: NoteState, newNode: INote | undefined) => {
  if (newNode === undefined) return noteState
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
  return {
    ...noteState
  }
}

export const unSelectNode = (noteState: NoteState, newNode: INote | undefined) => {
  const selectedNote = noteState.notes.find(n => (newNode !== undefined && n.id === newNode.id));
  if (selectedNote !== undefined) {
    noteState.notes.forEach(n => n.selected = false)
  }
  return {
    ...noteState
  }
}

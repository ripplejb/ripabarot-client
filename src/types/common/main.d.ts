interface INote {
  id: number
  title: string
  note: string
}

type NoteState = {
  notes: INote[]
}

type NoteAction = {
  type: string
  note: INote
}

type DispatchType = (args: NoteAction) => NoteAction
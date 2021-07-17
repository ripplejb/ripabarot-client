interface INote {
  id: number
  title: string
  note: string
  selected?: boolean
}

interface IUserLogin {
  email: string,
  password: string
}

type NoteState = {
  notes: INote[]
}

type LoginState = {
  signedIn: boolean
  user: string
}

type ApplicationState = {
  loginState: LoginState
  notesState: NoteState
}

type NoteAction = {
  type: string
  note: INote | undefined
}

type UserLoginAction = {
  type: string
  userLogin: IUserLogin
}

type DispatchType = (args: NoteAction) => NoteAction

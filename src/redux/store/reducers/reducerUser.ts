import * as actionTypes from "../actionTypes";
import {login, logout} from "./reducerUserActions";

const initialState: LoginState = {
  signedIn: false,
  user: ""
}

const reducerUser = (
  state: LoginState = initialState,
  action: UserLoginAction
): LoginState => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return login(state, action.userLogin)
    case actionTypes.LOGOUT_USER:
      return logout()
    default:
      return state
  }
}

export default reducerUser

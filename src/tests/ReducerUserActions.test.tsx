import {LOGIN_USER, LOGOUT_USER} from "../redux/store/actionTypes";
import reducerUser from "../redux/store/reducers/reducerUser";

describe('Reducer user tests', () => {
  it('should set user when the user signs in', () => {
    const initialState = {signedIn: false, user: ""}
    const userLogin = {email: "abc@correct.email", password: "correctPassword"}
    const newState = reducerUser(initialState, {type: LOGIN_USER, userLogin: userLogin})

    expect(newState.signedIn).toBe(true)
    expect(newState.user).toEqual(userLogin.email)
  })

  it('should set sign in status to false', () => {
    const initialState = {signedIn: false, user: ""}
    const userLogin = {email: "abc@correct.email", password: "correctPassword"}
    const newState = reducerUser(initialState, {type: LOGOUT_USER, userLogin: userLogin})

    expect(newState.signedIn).toBe(false)
    expect(newState.user).toEqual("")
  })
})

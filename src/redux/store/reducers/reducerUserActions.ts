const signedOutState = {signedIn: false, user: ""}
export const login = (user: LoginState, signIn: IUserLogin) => {
  if (signIn.email !== "" && signIn.password !== "")
  {
    return {signedIn: true, user: signIn.email}
  }
  return signedOutState
}

export const logout = () => signedOutState

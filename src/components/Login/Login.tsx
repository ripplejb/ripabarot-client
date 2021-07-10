import {FC, useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {useLoginStyle} from "./Login.css";

type LoginProps = {
  onSignedIn: (userLogin: IUserLogin) => void
}

const Login: FC<LoginProps> = (props) => {

  const [email_error, setEmailError] = useState("")
  const [password_error, setPasswordError] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function isEmailValid(em: string): boolean {
    const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return re.test(em)
  }

  function validateSetEmail(em: string): void {
    if (isEmailValid(em)) {
      setEmailError(() => "")
      setEmail(() => em)
    } else {
      setEmailError(() => "Invalid email id.")
    }
  }

  function validateAndSetPassword(pwd: string): void {
    setPasswordError("")
    setPassword(() => pwd)
  }

  const handleSignInClicked = () => {
    if (email === "") {
      setEmailError(() => "email must not be empty.")
      return
    }
    if (password === "") {
      setPasswordError(() => "password must not be empty.")
      return
    }
    props.onSignedIn({email: email, password: password})
  }

  const classes = useLoginStyle();

  return (
    <div className={classes.centered}>
      <div className={classes.container}>
        <TextField
          error={email_error !== ""}
          id="uid"
          label="eMail"
          type="email"
          helperText={email_error}
          onChange={(e) => validateSetEmail(e.target.value)}
          className={classes.child}
        />
        <TextField
          error={password_error !== ""}
          id="pwd"
          label="Password"
          type="password"
          helperText={password_error}
          className={classes.child}
          onChange={(e) => validateAndSetPassword(e.target.value)}
        />
        <Button variant={"contained"}
                color={"primary"}
                className={[classes.child, classes.button].join(" ")}
                onClick={handleSignInClicked}
        >Sign In</Button>
      </div>
    </div>
  )
}

export default Login

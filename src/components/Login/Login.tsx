import {FC, useState} from "react";
import {TextField} from "@material-ui/core";

const Login: FC = () => {

  const [email_error, setEmailError] = useState("")
  const [email, setEmail] = useState("")

  function validateEmail(em: string): void {
    const re = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (re.test(em)) {
      setEmailError(() => "")
      setEmail(() => em)
    } else {
      setEmailError(() => "Invalid email id.")
    }
  }


  return (
    <>
      <TextField
        error={email_error !== ""}
        id="uid"
        label="eMail"
        type="email"
        helperText={email_error}
        onChange={(e) => validateEmail(e.target.value)}
      />
      <TextField
        id="pwd"
        label="Password"
        type="password"
      />
    </>
  )
}

export default Login

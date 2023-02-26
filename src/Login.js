import React, { useState, useContext } from "react";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import { AccountContext } from "./Accounts";
import { Button } from "@mui/material";
import {Input} from "@mui/material";

function Login({handleLoginState}) {
    
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [loginFailure, setLoginFailure] = useState(false)

  const { authenticate } = useContext(AccountContext)

  function onSubmit(e) {
    e.preventDefault()
    authenticate(email, pass)
        .then(data => {
            console.log(email)
            console.log('Logged In!', data)
            handleCheck()
        })
        .catch(err => {
            console.error('Failed to login!', err)
            setLoginFailure(true)
        })
  }
  console.log(email)

  
  function handleCheck() {
    const user = UserPool.getCurrentUser()
    if (user) {
        handleLoginState(true)
        console.log('user fuound')
    }
}

  return (
    <div className="App">
      <div>
        <form onSubmit={onSubmit}>
          <Input value={email} onChange={e => setEmail(e.target.value)}/>
          <Input value={pass} type='password' onChange={e => setPass(e.target.value)}/>
          <Button type='submit'>Login</Button>
        </form>
        {loginFailure ? <div className="login-fail">Username/Password Not Found</div> : null}
      </div>
    </div>
  );
}

export default Login
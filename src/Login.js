import React, { useState, useContext } from "react";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";
import { AccountContext } from "./Accounts";

function Login({handleLoginState}) {
    
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

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
    <div>
      <div>
        <form onSubmit={onSubmit}>
          <input value={email} onChange={e => setEmail(e.target.value)}/>
          <input value={pass} onChange={e => setPass(e.target.value)}/>
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login
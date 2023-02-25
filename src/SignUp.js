import React, { useState } from "react";
import { CognitoUserPool, AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "./UserPool";


function SignUp({handleLoginState}) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const attributeList = [];

    function onSubmit(e) {
        e.preventDefault()
        UserPool.signUp(email, pass, attributeList, null, (err, data) => {
            if (err) console.error(err)
            console.log(data)
        })
    }
    console.log(email)

    function handleCheck() {
        const user = UserPool.getCurrentUser()
        if (user) {
            handleLoginState(true)
        }
    }

    return (
        <div className="App">

        <div>
            <form onSubmit={onSubmit}>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <input value={pass} type='password' onChange={e => setPass(e.target.value)}/>
            <button type='submit'>Submit</button>
            </form>
        </div>
        </div> 
    );

}


export default SignUp
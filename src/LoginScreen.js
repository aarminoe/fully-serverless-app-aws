import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Status from "./Status";

function LoginScreen({handleLoginState, handleSessionCheck}) {
    return(
        <div>
            <Status handleSessionCheck={handleSessionCheck}/>
            <Login handleLoginState={handleLoginState}/>
            <SignUp/>
        </div>
    )
}
export default LoginScreen
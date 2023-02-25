import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Status from "./Status";
import { Card } from "@mui/material";

function LoginScreen({handleLoginState, handleSessionCheck}) {
    return(
        <Card className="login-card">
            <Status handleSessionCheck={handleSessionCheck}/>
            <Login handleLoginState={handleLoginState}/>
            <SignUp/>
        </Card>
    )
}
export default LoginScreen
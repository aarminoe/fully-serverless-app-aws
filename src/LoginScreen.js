import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Status from "./Status";
import { Card } from "@mui/material";

function LoginScreen({handleLoginState, handleSessionCheck}) {
    return(
        <div>
            <h1 className="login-title">Welcome to Safe Spot</h1>
            <Card className="login-card">
                <Status handleSessionCheck={handleSessionCheck}/>
                <Login handleLoginState={handleLoginState}/>
                <SignUp/>
            </Card>

        </div>
    )
}
export default LoginScreen
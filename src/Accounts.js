import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./UserPool";

const AccountContext = createContext();

const Account = props => {

    const getSession = async () => 
        await new Promise((resolve, reject) => {
            const tt = Pool.getCurrentUser()
            console.log(tt)
            if (tt) {
                tt.getSession((err, session) => {
                    if (err) {
                        reject()
                    } else {
                        resolve(session)
                    }
                })
            } else {
                reject()
                console.log('rejected')
            }
            console.log('hi')
        })

    const authenticate = async (Username, Password) => {
        await new Promise((resolve, reject) => {
            const user = new CognitoUser({
                Username,
                Pool
            })
        
            const authDetails = new AuthenticationDetails({
                Username,
                Password
            })
        
            user.authenticateUser(authDetails, {
                onSuccess: data => {
                    console.log('onSuccess:', data)
                    resolve(data)
                },
        
                onFailure: err => {
                    console.error('onFailure:', err)
                    reject(err)
                },
                newPasswordRequired: data => {
                    console.log('newPasswordRequired:', data)
                    resolve(data)
                }
            })
        })
        
    }

    return(
        <AccountContext.Provider value = {{authenticate, getSession}}>
            {props.children}
        </AccountContext.Provider>
    )
}

export { Account, AccountContext}
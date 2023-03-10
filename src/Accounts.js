import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "./UserPool";

const AccountContext = createContext();

function Account(props) {

    console.log(Pool)
    const getSession = async () => 
        await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser()
            console.log(user)
            if (user) {
                user.getSession((err, session) => {
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
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

export default ({handleSessionCheck}) => {
    const [status, setStatus] = useState(false)

    const { getSession, logOut } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session)
                setStatus(true)
                
            })
    }, [])

    return(
        <div className="status">
            {status ? handleSessionCheck(status) : 'Please Log In or Sign Up with Email and Password'}
        </div>
    )
}
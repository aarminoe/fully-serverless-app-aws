import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";

export default () => {
    const [status, setStatus] = useState(false)

    const { getSession } = useContext(AccountContext)

    useEffect(() => {
        getSession()
            .then(session => {
                console.log('Session:', session)
                setStatus(true)
            })
    }, [])

    return(
        <div>
            {status ? 'You are logged in' : 'please log in'}
        </div>
    )
}
import React from "react";
import UserPool from "./UserPool";

function Profile() {

    console.log(UserPool.getCurrentUser())

    return(
        <div>
            profile
        </div>
    )
}

export default Profile;
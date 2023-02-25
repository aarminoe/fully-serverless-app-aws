import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return(
        <div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='profile'>Profile</Link> 
                <Link to='blogs'>Blogs</Link>
            </div>
        </div>
    )
}

export default Header;
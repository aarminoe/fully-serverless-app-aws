import React from "react";
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Link to='/'>Home</Link>
                <Link to='blogs'>Blogs</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
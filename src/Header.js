import React from "react";
import { Link } from "react-router-dom";
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Button } from "bootstrap";
import { NavLink } from "react-bootstrap";

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='blogs'>Blogs</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
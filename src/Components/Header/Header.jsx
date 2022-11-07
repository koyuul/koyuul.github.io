import * as React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(){
    return(
        <div id="header">
            <NavLink to={'/'} className="header-link" end>about</NavLink>
            <NavLink to={'projects'} className="header-link">projects</NavLink>
            <NavLink to={'experience'} className="header-link">experience</NavLink>
        </div>
    )
}

export default Header;
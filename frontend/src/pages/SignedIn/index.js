import React from 'react'
import {NavLinkLogo,NavLink,NavMenu} from './SideNavbar'
export const  Dashboard=()=> {
    return (
        <div>
            Dashboard
        </div>
    )
}
export const SideNavbar=()=>{
    return(
        <nav className="SideNavbar">
            <NavLinkLogo to='/' >
                <img  alt="logo"/>
            </NavLinkLogo>
            <NavMenu>
                <NavLink to="calendar">About</NavLink>
                <NavLink to="chat">Contact</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="signin">Signin</NavLink>
                <NavLink to="signup">Signup</NavLink>
            </NavMenu>
        </nav>
    )
}

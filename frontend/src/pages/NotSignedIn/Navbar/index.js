import React from 'react'
import UpCancerLogo from '../../../icons/UpCancerLogo.png'
import './navbar.css'
import {Link} from 'react-router-dom'


export const NavLinkLogo=(props)=>{
    return(
        <Link to={props.to} className="NavLinkLogo">{props.children}</Link>
    )
}
export const NavLink=(props)=>{
    return(
        <Link to={props.to} className="NavLink">{props.children}</Link>
    )
}
export const NavMenu=(props)=>{
    return(
        <div className="NavMenu">{props.children}</div>
    );
}
export const Nav=()=>{
    return(
        <nav className="Navbar">
            <NavLinkLogo to='/' >
                <img src={UpCancerLogo} alt="logo"/>
            </NavLinkLogo>
            <NavMenu>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="signin">Signin</NavLink>
                <NavLink to="signup">Signup</NavLink>
            </NavMenu>
        </nav>
    );
}
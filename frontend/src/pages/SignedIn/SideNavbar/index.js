import React from 'react'
import UpCancerLogo from '../../../icons/UpCancerLogo.png'
import './SideNavbar.css'


export const NavLinkLogo=(props)=>{
    return <a href={props.to} className="NavLinkLogo" >{props.children} </a>

}
export const NavLink=(props)=>{
    return <a href={props.to} className="NavLink" >{props.children}</a>

}
export const NavMenu=(props)=>{
    return <div className="NavMenu">{props.children}</div>

}
export const Nav2=(props)=>{
    return(
        <nav className="SideNavbar">
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
    )
}
export const Nav=()=>{
    return(
        <div className="sidenav">
            <a href="/">dashboard</a>
            <a href="calendar">Calendar</a>
            <a href="report">Report</a>
            <a href="chat">Chat</a>
        </div>
    )
}
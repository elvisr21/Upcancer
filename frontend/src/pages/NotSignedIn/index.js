import React from 'react'
import UpCancerLogo from '../../icons/UpCancerLogo.png'
import {NavLinkLogo,NavLink,NavMenu} from './Navbar'
import './Navbar/navbar.css'

export const Navbar=()=>{
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
            </NavMenu>
        </nav>
    )
}
export const Home = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
           <h1>Home</h1> 
        </div>
    )
}
export const About = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'90vh'}}>
           <h1>About</h1> 
        </div>
    )
}
export const Services=()=>{
    return(
        <div>Services</div>
    )
}
export const Contact=()=>{
    return(
        <div>Contact</div>
    )
}


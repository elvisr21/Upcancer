import React from 'react'
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink} from './NavbarElement'
import UpCancerLogo from '../../icons/UpCancerLogo.png'
function Navbar() {
    return (
        <>
           <Nav>
               <NavLink to="/">
                   <img src={UpCancerLogo} alt="" style={{height:90}}/>
                   
               </NavLink>
               <Bars />
               <NavMenu>
                   <NavLink to="/about" actitiveStyle>About</NavLink>
                   <NavLink to="/services" actitiveStyle>Services</NavLink>
                   <NavLink to="/contact" actitiveStyle>Contact us</NavLink>
                   <NavLink to="/signup" actitiveStyle>Sign up</NavLink>
               </NavMenu>
               <NavBtn>
                   <NavBtnLink to="/signin">Sign in</NavBtnLink>
               </NavBtn>
           </Nav>
        </>
    )
}

export default Navbar

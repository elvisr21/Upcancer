import React from 'react'
import {Nav} from './Navbar'
import {HomePage} from './Home'
import {AboutPage} from './About'
import {ServicePage} from './Services'
import {ContactPage} from './Contact'
import {Sign} from './Signin'
import {RegisterUser} from './Register'
export const Navbar=()=>{
    return(
        <Nav/>
    );
}
export const Home = () => {
    return (
        <HomePage/>
    );
}
export const About = () => {
    return (
        <AboutPage/>
    )
}
export const Services=()=>{
    return(
        <ServicePage/>
    )
}
export const Contact=()=>{
    return(
      <ContactPage/>
    )
}
export const SignedIn=(props)=>{
    return(
        <Sign func={props.func} Logged={props.Logged}/>
    )
}
export const Register=(props)=>{
    return(
        <RegisterUser func={props.func} Logged={props.Logged} Signin={props.Signin}/>
    )
}
import React from 'react'
import {Nav} from './Navbar'
import {HomePage} from './Home'
import {AboutPage} from './About'
import {ServicePage} from './Services'
import {ContactPage} from './Contact'

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


import React from 'react'
import SigninPage from '../Components/SignedinForm'
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
export const Login=()=>{
    return(
       <SigninPage></SigninPage>
    )
}
export const Signup=()=>{
    return(
        <div>SignUp</div>
    )
}

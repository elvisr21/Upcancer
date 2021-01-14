import React from 'react'

export const NavLinkLogo=(props)=>{
    return(
        <a href={props.to} className="NavLinkLogo" >{props.children} </a>
    )
}
export const NavLink=(props)=>{
    return(
        <a href={props.to} className="NavLink" >{props.children}</a>
    )
}
export const Bars=(props)=>{

}
export const NavMenu=(props)=>{
    return(
        <div className="NavMenu">{props.children}</div>
    )
}


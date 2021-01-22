import React from 'react';
import {Navbar,NavItem,Dropdownmenu} from './TopNavbar';
import {Nav as SideNav} from './SideNavbar';
import {DashboardPage} from './Dashboard'
import {ChatPage} from './Chat'
import {ReportPage} from './Report'
import {CalendarPage} from './Calendar'

import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { ReactComponent as PlusIcon } from '../../icons/plus.svg';


export const  Dashboard=()=> {
    return (
        <DashboardPage/>
    )
}
export const SideNavbar=()=>{
    return(
        <SideNav/>
    );
}
export const TopNavbar=()=>{
    return(
        <Navbar>
            <NavItem icon={<PlusIcon/>}/>
            <NavItem icon={<BellIcon/>}/>
            <NavItem icon={<MessengerIcon/>}/>
            
            <NavItem icon={<CaretIcon/>}>
                <Dropdownmenu/>
            </NavItem>
        </Navbar>
    )
}
export const Chat=()=>{
    return(
        <ChatPage/>
    )
}
export const Report=()=>{
    return(
        <ReportPage/>
    )
}
export const Calendar=()=>{
    return(
        <CalendarPage/>
    )
}
export const Signout=()=>{
    return(
        <h1>Signout</h1>
    )
}
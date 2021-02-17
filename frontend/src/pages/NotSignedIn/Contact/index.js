import './contact.css'

import Contact from './Contact'
import { Grid } from '@material-ui/core'
import {Container } from 'react-bootstrap';


export const ContactPage=()=>{
    const contacts = [
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123)456-7890",
            email: "placeholder00@gmail.com"
        },
    ]

    const contactComponents = contacts.map((c) => {
        return <Grid item sm={4}><Contact contact={c}/></Grid>
    })
    return(
        <div className="ContactPage" style={{width:"100%"}}>
            <h1 className="contact-title">Contacts</h1>
            <div className="contact-grid">
            <Grid container justify="left" className="material-grid" spacing={1} >{contactComponents}</Grid>
            
            </div>
        </div>
    );
};
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './contact.css'
import Contact from './Contact'
import AddContact from './AddContact'

export const ContactPage = () => {
    const [contacts, setContacts] = useState([]);

    const contactsPlaceholder = [
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com"
        },
    ]

    useEffect(() => {
        setContacts(contactsPlaceholder)
    }, []);
    

    const contactComponents = contacts.map((c) => {
        return <Grid item sm={4}><Contact contact={c} /></Grid>
    })
    return (
        <div className="contact-page">
            
            <Container fluid style={{width: "100%", margin: 0}} >
            <Row style={{width: "100%"}}>
                
                <Col sm={8}>
                    <h1 className="contact-title">Contacts</h1>
                    <div className="contact-grid">
                        <Grid container justify="left" className="material-grid" spacing={1} >{contactComponents}</Grid>
                    </div>
                </Col>
                <Col sm={4}>
                    {/*<AddContact />*/}
                </Col>
            </Row>
            </Container>
        </div>
    );
};
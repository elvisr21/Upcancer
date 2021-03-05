import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { Transition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css';

import './contact.css'
import Contact from './Contact'
import AddContact from './AddContact'
import ContactDetail from './ContactDetail'
import SearchContacts from './SearchContacts';

export const ContactPage = () => {
    const [contacts, setContacts] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [detail, setDetail] = useState({});
    const [detailComponent, setDetailComponent] = useState(null);

    // additional contact fields
    // title at company
    // address
    // website
    // notes
    const contactsPlaceholder = [
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com",
            company: "Sample Inc",
            title: "General Manager",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
        {
            name: "Gary Marsh",
            phoneNum: "(435) 723-1879",
            email: "gmarsh00@gmail.com",
            company: "Sample Inc 2",
            title: "Marketing Coordinator",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "This person is in charge of advertising campaigns.rsianuyydrclei;a;mewp;iiisiiiiiiiiiiiiiiisisisisisisisisisisisisisisiirya;woirnhewao;ircnyha;orihneawoir hcoa;ewirhpo; wainhfkadewfh dspirh  dewighloifbedfifbdiprthw",
        },
        {
            name: "Carmen Perkins",
            phoneNum: "(541) 260-8153",
            email: "cperkins00@gmail.com",
            company: "Sample Inc 3",
            title: "Project Manager",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
        {
            name: "April Jennings",
            phoneNum: "(440) 073-1213",
            email: "ajennings@gmail.com",
            company: "Sample Inc",
            title: "Web Designer",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
        {
            name: "Ivan Abdullah",
            phoneNum: "(123) 456-7890",
            email: "iabdullah0@gmail.com",
            company: "Sample Inc",
            title: "Human Resources Representative",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com",
            company: "Sample Inc",
            title: "Accountant",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
        {
            name: "Name",
            phoneNum: "(123) 456-7890",
            email: "placeholder00@gmail.com",
            company: "Sample Inc",
            title: "General Manager",
            address: "134 Hartford Dr\nLos Angeles, CA 91241",
            notes: "",
        },
    ]

    useEffect(() => {
        // TODO: call to backend to get all contacts
        setContacts(contactsPlaceholder)
    }, []);




    const toggleDetails = (selectedContact) => {
        if (!showDetails) { // if not currently showing detail
            // since setState is async, update component in useEffect instead of here
            setDetail(selectedContact)
        }
        setShowDetails(!showDetails)
    }
    useEffect(() => {
        // only create component AFTER setDetail is finished (which calls this useEffect)
        // otherwise detail will be null when passing it as a prop
        setDetailComponent(<ContactDetail selected={detail} onBackClick={toggleDetails} />)

    }, [detail])

    const contactComponents = contacts.map((c) => {
        return (
            <Grid item sm={4}>
                <Contact contact={c} onClickEvent={toggleDetails} showDetails={showDetails} show />
            </Grid>)
    })

    const duration = 500;

    const defaultStyle = {
        transition: `all ${duration}ms ease-in-out`,
        opacity: 0,
        width: "0%",
        height: "100%",
        zIndex: 1
    }

    const transitionStyles = {
        entering: { width: "100%", opacity: 1 },
        entered: { width: "100%", opacity: 1 },
        exiting: { width: "0%", opacity: 0 },
        exited: { width: "0%", opacity: 0 },
    };

    return (
        <div className="contact-page">

            <Container fluid style={{ width: "100%", height: "100%", marginLeft: 10, padding: 0 }} >
                <Row style={{ width: "100%", height: "100%", marginLeft: "10px" }}>

                    <Col md={8} className="px-0">
                        <Row className="top-row">
                            <h1 className="contact-title">Contacts</h1>
                            <SearchContacts />
                        </Row>
                        <div className="contact-grid" >
                            <Grid container justify="left" className="material-grid" spacing={1} >{contactComponents}</Grid>
                        </div>
                    </Col>
                    <Col md={4} className="px-0">

                        {/*
                    showDetails ? 
                    <Collapse in={showDetails} style={{height: "100%"}}>
                        <div id="detail-collapse">
                            {detailComponent}
                        </div>
                    </Collapse> : <AddContact />
                    */}
                        {/*
                    {showDetails ? detailComponent  : 
                    <AddContact /> }
                    */}

                        <AddContact />
                        <Transition in={showDetails} timeout={duration}>
                            {state => (
                                <div style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                }}>
                                    {detailComponent}
                                </div>
                            )}
                        </Transition>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
import React, { useState, useEffect } from 'react';
import { ListGroup, Row, Button, Image } from 'react-bootstrap';
import { XCircle,Telephone, Envelope, Briefcase, House, JournalText } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

import './contact.css';

const ContactDetail = (props) => {
    return (
        <div className="detail-card">
            <button variant="secondary" onClick={props.onBackClick} className="back-btn">
                <XCircle width="25" height="25" />
            </button>
            <Row className="detail-picture">
                <Image src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg" className="contact-picture" roundedCircle />
            </Row>
            <Row className="detail-title">
                <h4>{props.selected.name}</h4>
            </Row>
            
            <ListGroup background="info">
                <ListGroup.Item >
                    <Briefcase/> 
                    {" "}<strong>{props.selected.title}</strong> at <strong>{props.selected.company}</strong>
                    </ListGroup.Item>
                <ListGroup.Item>
                    <Telephone />
                    {" "}{props.selected.phoneNum}
                    </ListGroup.Item>
                <ListGroup.Item>
                    <Envelope />
                    {" "}{props.selected.email}
                </ListGroup.Item>
                <ListGroup.Item>
                    <House />
                    {" "}<strong>Address</strong>
                    {props.selected.address == null ? null : props.selected.address.toString().split('\n').map(s => <div>{s}<br/></div>)}
                </ListGroup.Item>
                <ListGroup.Item style={{minHeight: "100px", maxWidth: "100%", wordWrap: "break-word"}}>
                    <div>
                        <JournalText />
                        {" "}<strong>Notes</strong><br/>
                    </div>
                    {props.selected.notes}
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ContactDetail;

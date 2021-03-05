import './contact.css';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Telephone, Envelope, Pencil, TrashFill, Briefcase } from 'react-bootstrap-icons';

const Contact = (props) => {

    const editContact = () => {
        console.log("edit contact");
    }

    const deleteContact = () => {
        console.log("delete contact");
    }


    return (
        <div className="contact-square" onClick={() => {
            console.log(props.contact)
            props.onClickEvent(props.contact)
            }} aria-controls="detail-collapse" aria-expanded={props.showDetails}>
            <Row>
                <Image src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg" className="contact-picture" roundedCircle />
                <Col >
                    <Row className="name-row">
                        <h5>{props.contact.name}</h5>
                    </Row>
                    <Row className="info-row">
                        <Telephone className="contact-icon"/>
                        <p className="contact-text">{props.contact.phoneNum}</p></Row>
                    <Row className="info-row">
                        <Envelope className="contact-icon"/>
                        <p className="contact-text">{props.contact.email}</p>
                    </Row>
                    
                    <Row className="info-row">
                        <Briefcase className="contact-icon"/>
                        <p className="contact-text">Company: {props.contact.company}</p>
                    </Row>
                    {/*}
                    <Row className="info-row">
                        <p className="contact-text">747 Marineview St<br/>Denver, CO 91321</p>
                    </Row>
                    */}
                    <Row className="justify-content-end" style={{padding: "5px 10px 0 0",}}>
                        <Pencil onClick={editContact}/>
                        <TrashFill onClick={deleteContact} style={{color: "crimson", marginLeft: "4px"}}/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;


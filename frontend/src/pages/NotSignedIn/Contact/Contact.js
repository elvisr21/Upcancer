import './contact.css';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Telephone, Envelope, Pencil, TrashFill } from 'react-bootstrap-icons';

const Contact = (props) => {

    const editContact = () => {
        console.log("edit contact");
    }

    const deleteContact = () => {
        console.log("delete contact");
    }


    return (
        <div className="contact-square">
            <Row>
                <Image src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg" className="contact-picture" roundedCircle />
                <Col >
                    <Row className="name-row">
                        <h5>{props.contact.name}</h5>
                    </Row>
                    <Row className="info-row">
                        <Telephone />
                        <p className="contact-text">{props.contact.phoneNum}</p></Row>
                    <Row className="info-row">
                        <Envelope />
                        <p className="contact-text">{props.contact.email}</p>
                    </Row>
                    <Row className="justify-content-end" style={{paddingRight: "10px"}}>
                        <Pencil onClick={editContact}/>
                        <TrashFill onClick={deleteContact} style={{color: "crimson", marginLeft: "4px"}}/>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;


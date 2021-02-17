import './contact.css';
import { Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Telephone, Envelope } from 'react-bootstrap-icons';

const Contact = (props) => {
    return (
        <div className="contact-square">
            <Row>
                <Image src="https://afmnoco.com/wp-content/uploads/2019/07/74046195_s.jpg" className="contact-picture" roundedCircle />
                <Col >
                    <Row><h4>{props.contact.name}</h4></Row>
                    <Row><Telephone /><p className="contact-text">{props.contact.phoneNum}</p></Row>
                    <Row><Envelope /><p className="contact-text">{props.contact.email}</p></Row>
                </Col>
            </Row>
        </div>
    );
}

export default Contact;


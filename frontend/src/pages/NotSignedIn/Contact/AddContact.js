import { Form, Button, Row, Col } from 'react-bootstrap';


const AddContact = (props) => {
    const handleChange = () => {

    }


    return (

        <div className="add-contact">
            <h5 className="text-center">Add a New Contact</h5>
            <Form >
                <Form.Group controlId="form-name">
                    <Form.Label size="sm" sm={2}>Name</Form.Label>

                    <Form.Control size="sm" placeholder="Contact Name" defaultValue="Contact Name" required></Form.Control>

                </Form.Group>
                <Form.Group controlId="form-phone">
                    <Form.Label className="form-label">Phone Number</Form.Label>
                    <Form.Control type="tel" size="sm" placeholder="(XXX)XXX-XXXX" required></Form.Control>
                </Form.Group>
                <Form.Group controlId="form-email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" size="sm" placeholder="Email Address" required></Form.Control>
                </Form.Group>
            
                <Form.Group controlId="form-address">
                    <Form.Label>Address Line 1</Form.Label>
                    <Form.Control type="text" size="sm" placeholder="Address"></Form.Control>
                </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control size="sm" placeholder="City" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Control as="select" size="sm" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>...</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control size="sm" placeholder="#####" />
                        </Form.Group>
                    </Form.Row>
                

                <Form.Group controlId="form-notes">
                    <Form.Label>Additional Notes</Form.Label>
                    <Form.Control size="sm" as="textarea" placeholder="Enter contact notes here..." />
                </Form.Group>

                <Form.Group className="text-right" style={{ paddingTop: "10px" }}>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default AddContact;
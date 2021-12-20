import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div id='contact' className='mt-5 pb-5 text-center'>
            <Container>
                <h6 style={{ color: '#251d58' }}>Contact</h6>
                <h3 className='fw-bolder'>Let us handle your <br /> project, professionally.</h3>

                <Form className='mt-5 form-responsive'>
                    <Row xs={1} md={2}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    type="text"
                                    placeholder="Full Name"
                                    required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    type="email"
                                    placeholder="Email address"
                                    required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row xs={1} md={2}>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    type="number"
                                    placeholder="Phone Number"
                                    required />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    type="text"
                                    placeholder="Your Address"
                                    required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                            style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                            as="textarea"
                            placeholder='Your Message'
                            rows={3}
                            required />
                    </Form.Group>
                    <Button type='submit' className='btn edit-btn'>Send Message</Button>
                </Form>
            </Container>
        </div>
    );
};

export default Contact;
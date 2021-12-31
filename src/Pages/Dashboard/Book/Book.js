import React from 'react';
import { Alert, Button, Spinner, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';

const Book = () => {
    const { error, isLoading } = useAuth();

    const location = useLocation();
    const cusName = location?.state?.cus_name;
    const cusEmail = location?.state?.cus_email;
    const serviceName = location?.state?.service_name;
    const serviceImage = location?.state?.service_image;
    const totalAmount = location?.state?.total_amount;
    const serviceProfile = location?.state?.service_profile;


    const purchase = () => {
        const order = { cusName, cusEmail, serviceName, serviceImage, serviceProfile, totalAmount };
        fetch('https://frozen-falls-89510.herokuapp.com/init', {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                window.location.replace(data);
            })
    }
    return (
        <div className='mx-auto'>
            <div className='w-75 mx-auto'>
                <h4 className='mb-3'>Book</h4>
                {error && <Alert variant='danger'>{error}</Alert>}
                {isLoading ? <Spinner animation="border" variant="warning" /> :
                    <Form className='border p-5 rounded'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                type="text"
                                defaultValue={cusName}
                                placeholder='Customer Name'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                type="email"
                                defaultValue={cusEmail}
                                placeholder='Customer Email'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                type="text"
                                defaultValue={serviceName}
                                placeholder='Service Name'
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                type="number"
                                defaultValue={totalAmount}
                                placeholder='Total Price'
                                required
                            />
                        </Form.Group>
                        <Button onClick={purchase} className='btn edit-btn'>Pay Now</Button>
                    </Form>
                }
                <Alert variant='warning'><b>*N. B. :</b>Please select a service from <Link to="/allservices">service</Link> page</Alert>
            </div>
        </div>
    );
};

export default Book;
import React, { useEffect, useState } from 'react';
import { Alert, Button, Card, Col, Row, Spinner } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const BookingList = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    const { error, isLoading } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://frozen-falls-89510.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);

    const paymentValidation = () => {
        const serviceData = {
            tran_id: id,
            val_id: service?.val_id
        }
        fetch('https://frozen-falls-89510.herokuapp.com/validate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    alert('Order Placed Successfully')
                    navigate('/dashboard/bookinglist');
                }
            })
    }

    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Booking List</h4>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Row xs={1} md={2} className="g-4">
                        <Col>
                            {isLoading ? <Spinner animation="border" variant="warning" /> :
                                <Card>
                                    <Card.Body>
                                        <Card.Title className='row align-items-center'>
                                            <Card className='col-md-3 col-12 border-0'>
                                                <Card.Img variant="top" src={service?.product_image} />
                                            </Card>
                                            <Card className='col-md-6 col-12 border-0'>
                                                <Card.Body>
                                                    <Card.Title className='text-center'>{service?.product_name}</Card.Title>
                                                </Card.Body>
                                            </Card>
                                            <Card className='col-md-3 col-12 border-0'>
                                                <Button onClick={paymentValidation} className='btn edit-btn'>{service?.payment_status}</Button>
                                            </Card>
                                        </Card.Title>
                                        <Card.Text className='testimonial-card text-secondary'>{service?.product_profile}</Card.Text>
                                    </Card.Body>
                                </Card>}
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default BookingList;
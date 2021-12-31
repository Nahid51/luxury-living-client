import React from 'react';
import { Button, Card } from 'react-bootstrap';

const SingleBookingList = ({ order }) => {
    const { product_image, product_name, payment_status, product_profile, tran_id, val_id } = order;
    const paymentValidation = () => {
        const serviceData = {
            tran_id: tran_id,
            val_id: val_id
        }
        fetch('https://frozen-falls-89510.herokuapp.com/validate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(serviceData)
        })
            .then(res => res.json())
            .then(data => {
                if (data === true) {
                    alert('Order Placed Successfully!')
                }
            })
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title className='row align-items-center'>
                        <Card className='col-md-3 col-12 border-0'>
                            <Card.Img variant="top" src={product_image} />
                        </Card>
                        <Card className='col-md-6 col-12 border-0'>
                            <Card.Body>
                                <Card.Title className='text-center'>{product_name}</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className='col-md-3 col-12 border-0'>
                            <Button onClick={paymentValidation} className='btn edit-btn'>{payment_status}</Button>
                        </Card>
                    </Card.Title>
                    <Card.Text className='testimonial-card text-secondary'>{product_profile}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBookingList;
import React from 'react';
import { useState } from 'react';
import { Alert, Button, Card, Spinner } from 'react-bootstrap';

const ShowOrder = ({ myOrder }) => {
    const { _id, product_name, product_image, product_profile } = myOrder;
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleDelete = () => {
        const procced = window.confirm('Are you sure to delete this file?');
        if (procced) {
            fetch(`https://frozen-falls-89510.herokuapp.com/orderList/${_id}`, {
                method: 'DELETE',
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        setSuccess(true);
                        setIsLoading(true);
                        console.log(data);
                    }
                })
        }
    }
    return (
        <div>
            {success && <Alert variant='danger'>Delete Successfully!</Alert>}
            {isLoading ? <Spinner animation="border" variant="warning" /> :
                <Card>
                    <Card.Body>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-md-4 col-12 border-0'>
                                <Card.Img variant="top" src={product_image} />
                            </Card>
                            <Card className='col-md-8 col-12 border-0'>
                                <Card.Title className='text-center fw-bold mt-2'>{product_name}</Card.Title>
                            </Card>
                        </Card.Title>
                        <Card.Text>{product_profile}</Card.Text>
                        <Button onClick={() => handleDelete(_id)} className='btn btn-danger'>Delete</Button>
                    </Card.Body>
                </Card>}
        </div>
    );
};

export default ShowOrder;
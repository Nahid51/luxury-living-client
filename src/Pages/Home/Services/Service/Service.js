import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = ({ service }) => {
    const { photo, name, price, description } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='w-25 w-md-50 mx-auto' variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>
                        <Card.Text className='fw-bold'>&#36;{price}</Card.Text>
                        <Card.Text style={{ textAlign: 'justify', height: '200px', overflowY: 'scroll', scrollbarWidth: 'none' }}>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
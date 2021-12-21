import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'

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
                        <Card.Text className='service-card text-secondary'>{description}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;
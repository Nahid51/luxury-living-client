import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './AllService.css'

const AllService = ({ service }) => {
    const { photo, name, price, description } = service;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='w-25 w-md-50 mx-auto' variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>
                        <Card.Text className='fw-bold'>&#36;{price}</Card.Text>
                        <Card.Text className='allService-card'>{description}</Card.Text>
                        <NavLink to="/dashboard"><Button className='btn edit-btn'>Book Now</Button></NavLink>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllService;
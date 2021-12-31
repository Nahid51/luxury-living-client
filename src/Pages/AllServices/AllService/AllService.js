import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './AllService.css'

const AllService = ({ service }) => {
    const { user } = useAuth();
    const { photo, name, price, description } = service;

    const navigate = useNavigate();
    const handleDataPassing = () => {
        const order = {
            cus_name: user?.displayName,
            cus_email: user?.email,
            service_image: photo,
            service_name: name,
            total_amount: price,
            service_profile: description
        }
        navigate('/dashboard', {
            state: order
        })
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className='w-25 w-md-50 mx-auto' variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>
                        <Card.Text className='fw-bold'>&#36;{price}</Card.Text>
                        <Card.Text className='allService-card'>{description}</Card.Text>
                        <Button onClick={() => handleDataPassing()} className='btn edit-btn'>Book Now</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default AllService;
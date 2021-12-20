import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import bannerPhoto from '../../../Images/Image/banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='home-top'>
            <Container>
                <div className='row'>
                    <Card className='col-12 col-md-6 border-0 home-top'>
                        <Card.Body className='banner-text'>
                            <Card.Title className='banner-head'>WE BUILD YOUR DREAM</Card.Title>
                            <Card.Text className='text-secondary banner-paragraph'>
                                Online Easte Agency, the mordern way to sell your own home, you can use Giffin Residential to market your property.
                            </Card.Text>
                            <NavLink to="/allservices">
                                <Button className='btn edit-btn'>Booking</Button>
                            </NavLink>
                        </Card.Body>
                    </Card>
                    <Card className='col-12 col-md-6 border-0 home-top'>
                        <Card.Body>
                            <Card.Img variant="top" src={bannerPhoto} />
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Banner;
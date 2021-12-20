import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className='mt-5 footer-bg text-light'>
            <Container className='p-5'>
                <div className='row'>
                    <Card className='col-12 col-md-3 card-setup'>
                        <Card.Body className='d-flex mt-3'>
                            <Card.Text>
                                <i className="fas fa-map-marker-alt fa-lg me-3"></i>
                            </Card.Text>
                            <Card.Text style={{ fontWeight: 300 }}>
                                H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className='col-12 col-md-3 card-setup'>
                        <Card.Body className='row gy-3'>
                            <Card.Title className='mb-3'>Company</Card.Title>
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">About</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Projects</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Our Team</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Term and Condition</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Submit Listing</NavLink> <br />
                        </Card.Body>
                    </Card>
                    <Card className='col-12 col-md-3 card-setup'>
                        <Card.Body className='row gy-3'>
                            <Card.Title className='mb-3'>Quick Links</Card.Title>
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Quick Links</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Rentals</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Sales</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Contacts</NavLink> <br />
                            <NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 300 }} to="/about">Our Blogs</NavLink> <br />
                        </Card.Body>
                    </Card>
                    <Card className='col-12 col-md-3 card-setup'>
                        <Card.Body>
                            <Card.Title className='mb-3'>About Us</Card.Title>
                            <Card.Text style={{ fontWeight: 300 }}>Online Easte Agency, the mordern way to sell your own home, you can use Giffin Residential to market your property.</Card.Text>
                            <NavLink to="" className='text-light me-3'><i className="fab fa-facebook-square fa-lg"></i></NavLink>
                            <NavLink to="" className='text-light me-3'><i className="fab fa-twitter fa-lg"></i></NavLink>
                            <NavLink to="" className='text-light me-3'><i className="fab fa-instagram fa-lg"></i></NavLink>
                            <NavLink to="" className='text-light me-3'><i className="fab fa-linkedin fa-lg"></i></NavLink>
                            <NavLink to="" className='text-light me-3'><i className="fab fa-youtube fa-lg"></i></NavLink>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
            <Card.Text style={{ fontSize: '15px', fontWeight: 200 }} className='text-center'>&copy;Luxury Living 2021. All Rights Reserved</Card.Text>
        </div>
    );
};

export default Footer;
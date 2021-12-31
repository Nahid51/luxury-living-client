import { Rating } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './SingleTestimonial.css'

const SingleTestimonial = ({ testimonial }) => {
    const { photo, name, position, description, rating } = testimonial;
    const ratingValue = Number(rating);
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title className='row align-items-center'>
                            <Card className='col-3 border-0'>
                                <Card.Img variant="top" src={photo} />
                            </Card>
                            <Card className='col-9 border-0'>
                                <Card.Body>
                                    <Card.Title className='fw-bold'>{name}</Card.Title>
                                    <Card.Text className='fs-6'>{position}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Card.Title>
                        <Card.Text className='testimonial-card text-secondary'>{description}</Card.Text>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >
                            <Rating name="read-only" defaultValue={ratingValue} readOnly />
                        </Box>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default SingleTestimonial;
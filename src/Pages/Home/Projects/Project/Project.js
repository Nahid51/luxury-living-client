import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Project = ({ project }) => {
    const { photo, name, location } = project;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={photo} />
                    <Card.Body>
                        <Card.Title className='fw-bold'>{name}</Card.Title>
                        <Card.Text>{location}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Project;
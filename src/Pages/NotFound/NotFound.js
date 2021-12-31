import React from 'react';
import { Alert, Card } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import img from '../../Images/Image/error.jpg'

const NotFound = () => {
    return (
        <div>
            <Header />
            <Card className="m-5 w-50 mx-auto">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay className="row">
                </Card.ImgOverlay>
                <Alert variant='warning' className='fw-bold text-center'>Please follow the rules perfectly.</Alert>
            </Card>
        </div>
    );
};

export default NotFound;
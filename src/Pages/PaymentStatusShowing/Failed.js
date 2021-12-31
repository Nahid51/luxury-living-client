import React from 'react';
import { Alert } from 'react-bootstrap';
import Header from '../Home/Header/Header';

const Failed = () => {
    return (
        <div>
            <Header></Header>
            <Alert variant='danger' className='mt-5 text-center'>
                <h2>Your payment has not been successful!</h2>
                <h4>Please try again and follow each rule perfectly.</h4>
            </Alert>
        </div>
    );
};

export default Failed;
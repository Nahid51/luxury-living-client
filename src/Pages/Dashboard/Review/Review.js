import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const Review = () => {
    const [reviewData, setReviewData] = useState({});
    const [success, setSuccess] = useState(false);
    const { error, isLoading } = useAuth();

    const handleAddReview = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }
    const handleButton = e => {
        e.preventDefault();
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSuccess(true);
            })
    }
    return (
        <div className='mx-auto'>
            <div className='w-75 mx-auto'>
                <h4 className='mb-3'>Review</h4>
                {error && <Alert variant='danger'>{error}</Alert>}
                {isLoading ? <Spinner animation="border" variant="warning" /> :
                    <Form className='border p-5 rounded'>
                        {success && <Alert variant='success'>Review added successfully!</Alert>}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onBlur={handleAddReview}
                                name='name'
                                type="text"
                                placeholder="Enter Your Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onBlur={handleAddReview}
                                name='photo'
                                type="link"
                                placeholder="Enter Your Image URL"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onBlur={handleAddReview}
                                name='position'
                                type="text"
                                placeholder="Designation, Company's Name. ex: CEO, Dream IT"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                onBlur={handleAddReview}
                                name='description'
                                as="textarea"
                                placeholder='Enter Description'
                                rows={3}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                onBlur={handleAddReview}
                                name='rating'
                                type="number"
                                placeholder="Rating ? out of 5"
                            />
                        </Form.Group>
                        <Button onClick={handleButton} className='btn edit-btn'>Submit</Button>
                        <Button type='reset' className='btn edit-btn ms-1'>Reset</Button>
                    </Form>}
            </div>
        </div>
    );
};

export default Review;
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useGetReviewsQuery } from '../../../Redux/slices/serviceSlice';
import SingleTestimonial from './SingleTestimonial';

const Testimonials = () => {
    const testimonialsInfo = useGetReviewsQuery() || {};
    return (
        <div className='home-top'>
            <div className='test-margin'>
                <h3 className='text-center'>Testimonials</h3>
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {testimonialsInfo?.data?.map((testimonial) => (
                            <SingleTestimonial
                                key={testimonial._id}
                                testimonial={testimonial}
                            ></SingleTestimonial>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default Testimonials;
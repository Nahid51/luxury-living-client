import React from 'react';
import { Alert, Button, Container, Row, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useGetServicesQuery } from '../../../../Redux/Slices/ServiceSlice';
import Service from '../Service/Service';

const Services = () => {
    const servicesInfo = useGetServicesQuery();
    console.log('Information', servicesInfo.data);
    if (servicesInfo.isLoading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="warning" />
        </div>
    }
    if (servicesInfo.isError) {
        return <div class="d-flex justify-content-center">
            <Alert variant='danger'>
                This is a {servicesInfo.error.error} alert—check it out!
            </Alert>
        </div>
    }
    return (
        <div className='mt-5 text-center'>
            <Container>
                <h6 style={{ color: '#251d58' }}>Services</h6>
                <h3 className='fw-bolder'>We re an agency tailored <br /> to all clients needs that always delivers</h3>

                <div className='mt-3 mb-3'>
                    <Row xs={1} md={3} className="g-4">
                        {servicesInfo.data.map((service) => (
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>
                        ))}
                    </Row>
                </div>
                <NavLink to="/allservices">
                    <Button className='btn edit-btn mb-5'>Explore More</Button>
                </NavLink>
            </Container>
        </div>
    );
};

export default Services;
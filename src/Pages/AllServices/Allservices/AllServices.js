import React from 'react';
import { Alert, Container, Row, Spinner } from 'react-bootstrap';
import { useGetAllServicesQuery } from '../../../Redux/Slices/ServiceSlice';
import Header from '../../Home/Header/Header';
import AllService from '../AllService/AllService';

const AllServices = () => {
    const allServices = useGetAllServicesQuery();
    if (allServices.isLoading) {
        return <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="warning" />
        </div>
    }
    if (allServices.isError) {
        return <div class="d-flex justify-content-center">
            <Alert variant='danger'>
                This is a {allServices.error.error} alert—check it out!
            </Alert>
        </div>
    }
    return (
        <div>
            <Header />
            <div className='mt-5 text-center'>
                <Container>
                    <h2 className='text-center mt-5 fw-bold'>Our Services</h2>
                    <div className='mt-3 mb-3'>
                        <Row xs={1} md={3} className="g-4">
                            {allServices.data.map((service) => (
                                <AllService
                                    key={service._id}
                                    service={service}
                                ></AllService>
                            ))}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AllServices;
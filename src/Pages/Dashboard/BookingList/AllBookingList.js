import React, { useEffect, useState } from 'react';
import { Alert, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import SingleBookingList from './SingleBookingList';

const AllBookingList = () => {
    const { user, error, isLoading } = useAuth();
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://frozen-falls-89510.herokuapp.com/orderInfo', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [user])

    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Booking List</h4>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {isLoading ? <Spinner animation="border" variant="warning" /> :
                        <Row xs={1} md={2} className="g-4">
                            {allOrder.map((order) => (
                                <SingleBookingList
                                    key={order._id}
                                    order={order}
                                ></SingleBookingList>
                            ))}
                        </Row>}
                </div>
            </div>
        </div>
    );
};

export default AllBookingList;
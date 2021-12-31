import React from 'react';
import { Alert, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import { useGetOrdersQuery } from '../../../Redux/slices/serviceSlice';
import ShowOrder from './ShowOrder';

const ManageService = () => {
    const allOrder = useGetOrdersQuery();
    const { error, isLoading } = useAuth();
    console.log(allOrder.data);
    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Booking List</h4>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {isLoading ? <Spinner animation="border" variant="warning" /> :
                        <Row xs={1} md={2} className="g-4">
                            {allOrder?.data?.map((myOrder) => (
                                <ShowOrder
                                    key={myOrder._id}
                                    myOrder={myOrder}
                                ></ShowOrder>
                            ))}
                        </Row>}
                </div>
            </div>
        </div>
    );
};

export default ManageService;
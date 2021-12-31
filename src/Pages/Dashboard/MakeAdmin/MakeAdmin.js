import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
    const [adminData, setAdminData] = useState('');
    const [success, setSuccess] = useState(false);
    const { error, isLoading, token } = useAuth();

    const handleAddAdmin = e => {
        setAdminData(e.target.value);
    }
    const handleButton = e => {
        e.preventDefault();
        const user = { adminData }
        fetch('https://frozen-falls-89510.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
    }
    return (
        <div className='mx-auto'>
            <div className='w-75 mx-auto'>
                <h4 className='mb-3'>Make Admin</h4>
                {error && <Alert variant='danger'>{error}</Alert>}
                {isLoading ? <Spinner animation="border" variant="warning" /> :
                    <Form className='border p-5 rounded'>
                        {success && <Alert variant='success'>Made Admin successfully!</Alert>}
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                onBlur={handleAddAdmin}
                                name='Email'
                                type="email"
                                placeholder="Enter Email Address"
                            />
                        </Form.Group>
                        <Button onClick={handleButton} className='btn edit-btn'>Submit</Button>
                        <Button type='reset' className='btn edit-btn ms-1'>Reset</Button>
                    </Form>}
            </div>
        </div>
    );
};

export default MakeAdmin;
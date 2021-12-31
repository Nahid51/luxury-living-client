import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const AddProject = () => {
    const [projectData, setProjectData] = useState({});
    const [success, setSuccess] = useState(false);
    const { error, isLoading } = useAuth();

    const handleAddProject = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...projectData };
        newProductData[field] = value;
        setProjectData(newProductData);
    }
    const handleButton = e => {
        e.preventDefault();
        fetch('https://frozen-falls-89510.herokuapp.com/addProject', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(projectData)
        })
            .then(res => res.json())
            .then(data => {
                setSuccess(true);
            })
    }
    return (
        <div>
            <div className='mx-auto'>
                <div className='w-75 mx-auto'>
                    <h4 className='mb-3'>Add Project</h4>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    {isLoading ? <Spinner animation="border" variant="warning" /> :
                        <Form className='border p-5 rounded'>
                            {success && <Alert variant='success'>Project added successfully!</Alert>}
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddProject}
                                    name='name'
                                    type="text"
                                    placeholder="Enter Project Title"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddProject}
                                    name='photo'
                                    type='link'
                                    placeholder='Enter Image URL'
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    style={{ border: 'none', backgroundColor: '#F7F7F7', padding: '10px' }}
                                    onBlur={handleAddProject}
                                    name='location'
                                    type="text"
                                    placeholder="Enter Location"
                                />
                            </Form.Group>
                            <Button onClick={handleButton} className='btn edit-btn'>Submit</Button>
                            <Button type='reset' className='btn edit-btn ms-1'>Reset</Button>
                        </Form>}
                </div>
            </div>
        </div>
    );
};

export default AddProject;
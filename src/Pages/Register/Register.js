import React, { useState } from 'react';
import { Alert, Button, Card, Container, Form, Spinner } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import register from '../../Images/Image/register.jpg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, userRegistration, isLoading, error, googleSignIn, facebookSignIn } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);

    }

    const handleRegisterButton = e => {
        e.preventDefault();
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match.')
            return
        }
        userRegistration(loginData?.email, loginData?.password, loginData.name, location, navigate);
    }

    const handleGoogleSignIn = () => {
        googleSignIn(location, navigate);
    }
    const handleFacebookSignIn = () => {
        facebookSignIn(location, navigate);
    }

    return (
        <div className='text-center'>
            <Header />
            <Container className='mt-5'>
                <div className='row'>
                    <Card className='col-12 col-md-6 border-0'>
                        <Card.Img
                            variant="top"
                            src={register}
                            className='w-75 ms-auto'
                        />
                    </Card>
                    <Card style={{ width: '25rem' }} className='col-12 col-md-6'>
                        <Card.Body>
                            <Card.Title className='login-text'>Create an account</Card.Title>
                            {user.email &&
                                <Alert variant='success'>
                                    Register Successfully!
                                </Alert>
                            }
                            {error && <Alert variant='danger'>{error}</Alert>}
                            {isLoading ? <Spinner animation="border" variant="warning" /> :
                                <Form>
                                    <Form.Group className="mb-3" controlId="formGroupName">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                        <Form.Control
                                            onBlur={handleOnBlur}
                                            type="password"
                                            name="password2"
                                            placeholder="Confirm Password"
                                        />
                                    </Form.Group>
                                    <Button onClick={handleRegisterButton} type='submit' className='btn edit-btn'>Create an account</Button>
                                </Form>}
                            <Card.Text className='mt-3'>
                                Already have an account?<NavLink to="/login">Login</NavLink>
                            </Card.Text>
                            <Card.Text className='mt-5'>
                                Or Login with <Button onClick={handleGoogleSignIn} className='btn btn-danger'>Google</Button>
                                <Button onClick={handleFacebookSignIn} className='btn btn-primary'>Facebook</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

        </div >
    );
};

export default Register;
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/Group 33069.png';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <div className="home-top">
                <div className="pt-3">
                    <Navbar bg="light" expand="lg">
                        <Container>
                            <NavLink to="/" style={{ textDecoration: "none" }}>
                                <Navbar.Brand>
                                    <img
                                        src={logo}
                                        width="100"
                                        className="d-inline-block align-top"
                                        alt="React Bootstrap logo"
                                    />
                                </Navbar.Brand>
                            </NavLink>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mx-auto d-flex align-items-center">
                                    <NavLink className='me-5 text-dark text-decoration-none' to="/">Home</NavLink>
                                    <HashLink className='me-5 text-dark text-decoration-none' to="/home#projects">Projects</HashLink>
                                    <NavLink className='me-5 text-dark text-decoration-none' to="/allservices">Services</NavLink>
                                    <NavLink className='me-5 text-dark text-decoration-none' to="/dashboard">Dashboard</NavLink>
                                    <HashLink className='me-5 text-dark text-decoration-none' to="/home#contact">Contact</HashLink>
                                </Nav>
                                <Nav className="ms-auto">
                                    <Nav.Link href="">Signed in as: {user.displayName}</Nav.Link>
                                    {user.email ?
                                        <Button onClick={logOut} className='btn edit-btn'>Logout</Button> :
                                        <NavLink to='/login'>
                                            <Button className='btn edit-btn'>Login</Button>
                                        </NavLink>
                                    }
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;
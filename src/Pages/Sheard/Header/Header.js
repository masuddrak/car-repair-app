import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user]=useAuthState(auth)
const signoutHandel=()=>{
    signOut(auth)
}
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><span className='fw-bold fs-2'>BD SECORTS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto headera">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/payment">Payment Option</Nav.Link>
                            <Nav.Link as={Link} to="/serviceCharge">Service Charge</Nav.Link>
                            <Nav.Link as={Link}  to="services">Services</Nav.Link>
                            <Nav.Link as={Link} to="about">About Us</Nav.Link>
                            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
                            
                            {   user?<button onClick={signoutHandel}>{user.email}</button>:
                                <Nav.Link as={Link} to="login">Login</Nav.Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
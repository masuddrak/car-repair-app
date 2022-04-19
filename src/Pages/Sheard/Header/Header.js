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
                    <Navbar.Toggle className='toggle' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto headera text-center">
                            <Link to="/home">Home</Link>
                            <Link to="/payment">Payment Option</Link>
                            <Link to="/serviceCharge">Service Charge</Link>
                            <Link  to="services">Services</Link>
                            <Link to="about">About Us</Link>
                            <Link to="contact">Contact Us</Link>
                            
                            {   user?<button onClick={signoutHandel}>{user.email}</button>:
                                <Link to="login">Login</Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
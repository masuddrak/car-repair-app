import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import CustomLink from '../../../CustomLink';
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
                            <CustomLink to="/home">Home</CustomLink>
                            <CustomLink to="/payment">Payment Option</CustomLink>
                            <CustomLink to="/serviceCharge">Service Charge</CustomLink>
                            <CustomLink  to="services">Services</CustomLink>
                            <CustomLink to="about">About Us</CustomLink>
                            <CustomLink to="contact">Contact Us</CustomLink>
                            
                            {   user?<button onClick={signoutHandel}>{user.email}</button>:
                                <CustomLink to="login">Login</CustomLink>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
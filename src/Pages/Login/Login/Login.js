import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, } from 'react-firebase-hooks/auth';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('')
    const passswordRef = useRef('')
    const naviget = useNavigate()
    let location = useLocation()
    

    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        naviget(from, { replace: true });
    }
    const handelFormSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passswordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    const registerHandel = event => {
        naviget('/register')
    }
    return (
        <div className='w-25  mt-5 mx-auto'>
            <h2 className=' text-primary text-center'>Login Now</h2>
            <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passswordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login Now
                </Button>
            </Form>
            <p>New to Car Service? <Link to='/register' onClick={registerHandel} className='text-warning'>Register Now</Link></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Login;
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef('')
    const passswordRef = useRef('')
    const naviget = useNavigate()
    const handelFormSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passswordRef.current.value
        // console.log(email, password)
    }
    const registerHandel = event => {
        naviget('/register')
    }
    return (
        <div className='w-50 mt-5 mx-auto'>
            <h2 className=' text-primary text-center'>Login Now</h2>
            <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passswordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to Car Service? <Link to='/register' onClick={registerHandel} className='text-warning'>Register Now</Link></p>
        </div>
    );
};

export default Login;
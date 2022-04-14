import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Registation = () => {
    const emailRef = useRef('')
    const passswordRef = useRef('')
    const nameRef = useRef('')
    const naviget=useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const handelFormSubmit = event => {
        event.preventDefault()
        const name=nameRef.current.value
        const email = emailRef.current.value
        const password = passswordRef.current.value
        createUserWithEmailAndPassword(email,password)
    }
    const loginHandel=()=>{
        naviget('/login')
    }
    if(user){
        naviget('/home')
    }
    return (
        <div className='w-50 mt-5 mx-auto'>
            <h2 className='text-center text-primary'> Registation Now</h2>
            <Form onSubmit={handelFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passswordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="Register">
                    Register Now
                </Button>
            </Form>
            <p>Alerady have accoun? <Link to='/login' onClick={loginHandel} className='text-warning'>Login Now</Link></p>
        </div>
    );
};

export default Registation;
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';


const Registation = () => {
    const emailRef = useRef('')
    const passswordRef = useRef('')
    const nameRef = useRef('')
    const naviget = useNavigate()
    const [agree,setAgree]=useState(false)
    const [displayName,setDisplayName] = useState('');
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    console.log(user)
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const handelFormSubmit =async(event) => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passswordRef.current.value
        
       
          await  createUserWithEmailAndPassword(email, password)
     
        await updateProfile({displayName:name});
          alert('Updated profile');
    }
    const loginHandel = () => {
        naviget('/login')
    }
    if (user) {
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
                    {/* ref={passswordRef}  */}
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className='mb-3 ' controlId="formBasicCheckbox">
                    <Form.Check onClick={()=>setAgree(!agree)} className={agree?"":'text-danger'} type="checkbox" label="Allow to to CheckBox" />
                </Form.Group>
                <Button disabled={!agree} className='w-100' variant="primary" type="Register">
                    Register Now
                </Button>
            </Form>
            <p>Alerady have accoun? <Link to='/login' onClick={loginHandel} className='text-warning'>Login Now</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registation;
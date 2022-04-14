import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let erroElement;
    if(error){
        erroElement= <div>
            <p className='text-danger'>{error.message}hhgg</p>
        </div>
    }
    return (
        <div>
            <div className='d-flex'>
            <hr className='w-50' style={{height:"1px"}} />
            <p className='mx-2'>OR</p>
            <hr className='w-50' style={{height:"1px"}} />
        </div>
       
        { erroElement}
        <div>
            <button onClick={() => signInWithGoogle()} className='p-3 w-100'><img style={{width:"25px"}}  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" /> <span className='px-3'>Google Sign In</span></button>
        </div>
        <div className='my-3'>
            <button className='p-3 w-100'><img style={{width:"25px"}}  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/800px-Facebook_logo_%28square%29.png" alt="" /> <span className='px-3'>Facebook Sign In</span></button>
        </div>
        <div>
            <button className='p-3 w-100'><img style={{width:"25px"}}  src="https://logoeps.com/wp-content/uploads/2014/04/24233-github-logo-in-a-rounded-square-icon-vector-icon-vector-eps.png" alt="" /> <span className='px-3'>GitHub Sign In</span></button>
        </div>
        </div>
    );
};

export default SocialLogin;
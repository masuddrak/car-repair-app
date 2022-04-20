import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    let erroElement;
    if(error||error1){
        erroElement= <div>
            <p className='text-danger'>{error?.message || error1?.message}</p>
        </div>
    }
    let elementLoading;
    if (loading) {
        elementLoading=<p>{loading || loading1}Loading...</p>;
      }
    return (
        <div>
            <div className='d-flex'>
            <hr className='w-50' style={{height:"1px"}} />
            <p className='mx-2'>OR</p>
            <hr className='w-50' style={{height:"1px"}} />
        </div>
       
        { erroElement}
        {elementLoading}
        <div>
            <button onClick={() => signInWithGoogle()} className='p-3 w-100'><img style={{width:"25px"}}  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="" /> <span className='px-3'>Google Sign In</span></button>
        </div>
        
        
        </div>
    );
};

export default SocialLogin;
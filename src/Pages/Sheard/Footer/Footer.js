import React from 'react';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';
import { BeakerIcon, CheckIcon, PhoneIncomingIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <footer className=' bg-primary '>
            <div className="container py-2">
             <div className="row">
                 <div className="col-lg-6">
                     <img src="" alt="" />
                 </div>
                 <div className="col-lg-6 text-white text-center">
                    <p className='m-0'>Contatct Now</p>

                    <p><PhoneIncomingIcon style={{ width: 23, fontWeight: "bold" }}></PhoneIncomingIcon> <span>+880 1721006620</span></p>
                    <SocialLogin></SocialLogin>
                 </div>
             </div>
            </div>
        </footer>
    );
};

export default Footer;
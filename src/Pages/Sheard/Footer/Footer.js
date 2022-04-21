import React from 'react';
import SocialLogin from '../../Login/SocialLogin/SocialLogin';
import { BeakerIcon, CheckIcon, PhoneIncomingIcon } from '@heroicons/react/solid'
const Footer = () => {
    return (
        <footer className=' bg-primary '>
            <div className='container text-white py-5 text-center'>
                <p className='m-0'>Contatct Now</p>
                <p className='m-0'>রিয়াদ ভাই</p>
                <p><PhoneIncomingIcon style={{ width: 23, fontWeight: "bold" }}></PhoneIncomingIcon> <span>+880 1721006620</span></p>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeaderText from '../../HeaderText/HeaderText';
import Whyme from '../../Whyme/Whyme';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Serevices/Services';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Welcome to Best Escort BD, High Class Escort Service Provider in Bangladesh</title>
            </Helmet>
            <HeaderText></HeaderText>
            <Services></Services>
            <Whyme></Whyme>
        </div>
    );
};

export default Home;
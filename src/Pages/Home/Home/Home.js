import React from 'react';
import HeaderText from '../../HeaderText/HeaderText';
import Whyme from '../../Whyme/Whyme';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Serevices/Services';

const Home = () => {
    return (
        <div>
            <HeaderText></HeaderText>
            <Services></Services>
            <Whyme></Whyme>
        </div>
    );
};

export default Home;
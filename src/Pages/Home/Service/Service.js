import React from 'react';
import './Service.css'
const Service = ({service}) => {
    console.log(service)
    const {name,img,description,price}=service
    return (
        <div className='service col-sm-12 com-md-6 col-lg-4 g-5'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;
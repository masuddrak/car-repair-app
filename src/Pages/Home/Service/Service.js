import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,img,description,price}=service
    const naviget=useNavigate()
    const navigetServiceDetails=(id)=>{
        naviget(`/service/${id}`)
    }
    return (
        <div className='service col-sm-12 com-md-6 col-lg-4 g-5'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={()=>navigetServiceDetails(id)} className='btn btn-primary'>Book:{name}</button>
        </div>
    );
};

export default Service;
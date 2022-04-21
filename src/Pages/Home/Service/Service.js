import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {id,name,img}=service
    const naviget=useNavigate()
    const navigetServiceDetails=(id)=>{
        naviget(`/service/${id}`)
    }
    return (
        <div onClick={()=>navigetServiceDetails(id)} className='g-5 col-sm-12 col-md-6 col-lg-4 col-xl-3 '>
            <div className="card shadow border-0" style={{width: "18rem"}}>
            <img style={{height:310}} className='w-100 rounded' src={img}  alt="..."/>
                <div className="card-body">
                    <h5 className='text-primary'>{name}</h5>
                </div>
        </div>
        </div>
    );
};

export default Service;
import React from 'react';

const Details = ({sevice}) => {
    const {name,price,img}=sevice
    return (
        <div>
            <img className='w-100' src={img} alt="" />
            <h5>{name}</h5>
        </div>
    );
};

export default Details;
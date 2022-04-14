import React from 'react';

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4 col-xl-3'>
            <div className="card" style={{width: "18rem"}}>
            <img className='w-100' src={img}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
        </div>
    );
};

export default Expert;
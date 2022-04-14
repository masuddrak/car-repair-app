import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceID}=useParams()
    return (
        <div>
            <h2>service details{serviceID}</h2>
            <div className='text-center'>
            <Link to='/checkout'>
                <button>Prossid checkout now</button>
            </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;
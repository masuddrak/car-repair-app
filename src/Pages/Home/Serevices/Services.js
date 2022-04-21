import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id='services' className='container my-4'>
             <Helmet>
                <title>Services | Escort Service best collection | Bangladesh Escort and BD Call Girl</title>
            </Helmet>
            <h3 className='text-center text-primary text-uppercase'>Escort Service best collection</h3>
            <hr style={{ height: 2, color: 'blue' }} className='w-50 mx-auto ' />
            <div>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;
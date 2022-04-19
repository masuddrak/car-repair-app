import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Details from './Details/Details';

const ServiceDetails = () => {
    const { serviceID } = useParams()
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
            const newdata=data.filter(service=>service.id==serviceID)
            setServices(newdata)
            })
    }, [serviceID])
  
    return (
        <div>
                {
                    services.map(sevice=><Details
                        key={sevice.id}
                        sevice={sevice}
                    ></Details>)
                }
        </div>
    );
};

export default ServiceDetails;
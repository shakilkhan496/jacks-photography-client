import React, { useEffect, useState } from 'react';
import AllServiceCard from './AllServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 md:p-28 mt-10 mb-10 lg:p-28 gap-10'>
            {
                services?.map(service => <AllServiceCard service={service} key={service._id}></AllServiceCard>)
            }
        </div>
    );
};

export default Services;
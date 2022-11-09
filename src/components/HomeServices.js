import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const HomeServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://jacks-photography.vercel.app/servicesLimit')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='space-y-10 mb-20'>
            <h1 data-aos="fade-right" className='text-center font-semibold text-2xl'>Here is my services</h1>
            <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2'>
                {
                    services?.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <Link className='btn hover:scale-110 focus:scale-90 text-2xl transition w-48 mt-10 bg-blue-600' to='/services'>SEE All</Link>

            </div>
        </div>
    );
};

export default HomeServices;
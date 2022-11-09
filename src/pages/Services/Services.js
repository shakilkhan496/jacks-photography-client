import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllServiceCard from './AllServiceCard';

const Services = () => {
    const [loading, setLoading] = useState(false);

    useTitle('Services');
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())

            .then(data => {
                setLoading(true)
                setServices(data);
            })
    }, [])
    return (
        <div>
            {
                loading ? <div className='grid lg:grid-cols-3 md:grid-cols-2 md:p-28 mt-10 mb-10 lg:p-28 gap-10'>


                    {
                        services?.map(service => <AllServiceCard service={service} key={service._id}></AllServiceCard>)
                    }
                </div> : <div className='flex h-60 justify-center items-center'>

                    <h1 className='text-center'> <img className='w-24' src="https://i.gifer.com/ZKZg.gif" alt="" /></h1>
                </div>
            }
        </div>
    );
};

export default Services;
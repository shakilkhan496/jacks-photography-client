import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const service = useLoaderData();

    const { name, img, details, price } = service[0];
    return (
        <div>
            <h1 className='text-center mt-20 text-3xl text-blue-600 font-semibold'>Service Details</h1>
            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{details}</p>
                        <button className="btn btn-outline">Price: {price}$</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
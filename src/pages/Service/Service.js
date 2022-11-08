import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CustomerReviews from './CustomerReviews';

const Service = () => {
    const service = useLoaderData();


    const { name, img, details, price, _id } = service[0];
    return (
        <div>
            <div className='bg-blue-100 lg:m-10 rounded-3xl'>
                <h1 className='text-center pt-10 text-3xl text-black font-semibold'>Service Details</h1>
                <div className="hero min-h-screen">

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{details}</p>
                            <button className="btn btn-outline">Price: {price}$</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* customer review section */}
            <div className='bg-blue-100 pt-10 lg:m-10 rounded-3xl'>
                <h1 className='text-center   text-3xl text-blue-600 font-semibold'>Customer reviews</h1>
                <CustomerReviews serviceName={name} serviceImg={img} _id={_id}></CustomerReviews>
            </div>
        </div>
    );
};

export default Service;
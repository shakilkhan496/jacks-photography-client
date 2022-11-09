import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import CustomerReviews from './CustomerReviews';
import '../../components/css.css';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view'

const Service = () => {
    const service = useLoaderData();


    const { name, img, details, price, _id } = service[0];
    useTitle(name)
    return (
        <div className='lg:mt-32 md:mt-32 mt-20'>
            <div className='bg-blue-100 lg:m-10 rounded-3xl'>
                <h1 data-aos="fade-left" className='text-center pt-10 text-3xl text-black font-semibold'>Service Details</h1>
                <div data-aos="zoom-in" className="hero min-h-screen">

                    <PhotoProvider>
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <PhotoView src={img}><img alt='' src={img} className=" w-1/2 rounded-lg shadow-2xl" /></PhotoView>
                            <div>
                                <h1 className="text-5xl font-bold">{name}</h1>
                                <p className="py-6">{details}</p>
                                <button className="btn btn-outline">Price: {price}$</button>
                            </div>
                        </div>
                    </PhotoProvider>
                </div>
            </div>
            {/* customer review section */}
            <div className='bg-base-200 pt-10 lg:m-10 rounded-3xl'>
                <h1 data-aos="fade-right" className='text-center mb-5   text-3xl  font-semibold'>Customer reviews</h1>
                <CustomerReviews serviceName={name} serviceImg={img} _id={_id}></CustomerReviews>
            </div>
        </div>
    );
};

export default Service;
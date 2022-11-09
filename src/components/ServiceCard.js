import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './css.css'

const ServiceCard = ({ service }) => {
    const { name, img, price, details, _id } = service;
    return (
        <div data-aos="zoom-in" className="card hover:scale-110 transition w-96 bg-base-100 shadow-xl">
            <PhotoProvider> <figure><PhotoView src={img}><img src={img} alt={name} /></PhotoView></figure></PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p id='p'>{details}</p>
                </div>
                <h1 className='text-amber-600 font-bold'>Price : {price}$</h1>
                <div className="card-actions justify-end">

                    <Link to={`/services/${_id}`} className="btn btn-outline">View details</Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import './css.css'

const ServiceCard = ({ service }) => {
    const { name, img, price, details } = service;
    return (
        <div className="card hover:scale-110 transition w-96 bg-base-100 shadow-xl">
            <PhotoProvider> <figure><PhotoView src={img}><img src={img} alt={name} /></PhotoView></figure></PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p id='p'>{details}</p>
                </div>
                <h1 className='text-amber-600 font-bold'>Price : {price}$</h1>
                <div className="card-actions justify-end">

                    <Link to='/services' className="btn btn-outline">SEE ALL</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
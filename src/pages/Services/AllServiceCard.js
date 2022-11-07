import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const AllServiceCard = ({ service }) => {
    const { name, img, price, details, _id } = service;
    return (
        <div>
            <PhotoProvider>
                <div className="card hover:scale-105 transition w-96 bg-base-100 shadow-xl">
                    <figure><PhotoView src={img}><img src={img} alt={name} /></PhotoView></figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <div>
                            <p id='p'>{details}</p>
                        </div>

                        <div className="card-actions justify-end">
                            <p className='text-xl font-semibold text-amber-700'>Price : ${price}</p>
                            <Link to={`/services/${_id}`} className="btn btn-outline">View details</Link>
                        </div>
                    </div>
                </div>
            </PhotoProvider>

        </div>
    );
};

export default AllServiceCard;
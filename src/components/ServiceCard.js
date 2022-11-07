import React from 'react';
import { Link } from 'react-router-dom';
import './css.css'

const ServiceCard = ({ service }) => {
    const { name, img, price, details } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p id='p'>{details}</p>
                </div>

                <div className="card-actions justify-end">
                    <Link to='/services' className="btn btn-outline">SEE ALL</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
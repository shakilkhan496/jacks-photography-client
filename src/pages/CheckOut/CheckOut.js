import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const course = useLoaderData();
    const { title, image, info, id } = course;
    return (
        <div className="card lg:w-96 mx-auto mt-10 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h1>Course ID : TAPSKILLS{id}</h1>
                <h2 className="card-title text-amber-400">{title}</h2>
                <p>{info}</p>
                <p>Price : <span className='text-amber-500 font-bold'>44{id}</span> USD</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning">Check-out Now</button>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
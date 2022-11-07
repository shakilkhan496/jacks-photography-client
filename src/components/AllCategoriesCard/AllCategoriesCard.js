import React from 'react';
import { Link } from 'react-router-dom';

const AllCategoriesCard = ({ category }) => {
    const { title, image, id, info } = category;


    return (
        <div className="card card-compact lg:w-80  bg-base-100 shadow-xl">
            <figure><img src={image} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{info}</p>
                <div className="card-actions justify-end">
                    <Link className='block bg-transparent transition hover:bg-amber-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded'

                        to={`/courses/${id}`}>See details</Link>
                </div>
            </div>
        </div>
    );
};

export default AllCategoriesCard;
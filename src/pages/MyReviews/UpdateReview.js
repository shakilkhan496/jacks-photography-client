import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    useTitle('UpdateReview')
    const data = useLoaderData();
    const reviewData = data[0];

    const { reviewDetails, _id } = reviewData;
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const reviewDetails = form.reviewDetails.value;
        const updatedReview = {
            reviewDetails: reviewDetails
        }
        console.log(updatedReview);
        fetch(`http://localhost:5000/customerReviews/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Review updated')

                }
            })


    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <p className="py-6">Update your review here</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleUpdate} className="card-body">

                        <div className="form-control">

                            <textarea name='reviewDetails' type="text" defaultValue={reviewDetails} className="input h-20 input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update review</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateReview;
import React from 'react';

const Review = ({ review }) => {
    const { userName, reviewDetails, userImg } = review;
    console.log(reviewDetails)
    return (
        <div className="card  bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <div className='lg:flex'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img alt='' src={userImg} />
                        </div>
                    </div>
                    <h2 className="card-title ml-5"  >{userName}</h2>
                </div>
                <p>{reviewDetails}</p>

            </div>
        </div>
    );
};

export default Review;
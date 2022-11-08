import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from './Review';

const CustomerReviews = ({ _id, serviceName, serviceImg }) => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    console.log(reviews)

    useEffect(() => {
        fetch(`http://localhost:5000/customerReviews?productID=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
    }, [_id])



    const handlePostReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const review = form.review.value;;
        const customerReview = {
            productID: _id,
            email: user.email,
            reviewDetails: review,
            userName: user.displayName,
            userImg: user.photoURL,
            serviceName: serviceName,
            serviceImg: serviceImg,

        }
        fetch('http://localhost:5000/customerReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged === true) {
                    alert('Review posted successfully')
                    setReviews([...reviews, customerReview]);
                    form.reset();
                }
            })


    }
    return (
        <div className='lg:p-20'>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-20 lg:m-20'>
                {
                    reviews?.map(review => <Review key={review._id} review={review}></Review>)
                }

            </div>

            <div>
                {
                    !user ?

                        <>
                            <div className='text-center text-2xl font-semibold'>
                                <h1>Please <Link to='/login' className='btn btn-outline'>Login</Link> to Add reviews</h1>
                            </div>


                        </>


                        :


                        <>
                            <div className='hero'>
                                <div className='hero-content flex-col'>
                                    <h1 className='text-xl font-semibold'>Add your reviews here</h1>
                                    <form onSubmit={handlePostReview} className='form-control space-y-6'>
                                        <textarea required name='review' className="textarea h-40 lg:w-80 textarea-primary" placeholder="Your reviews makes us bright"></textarea>
                                        <button className='btn '>POST NOW</button>
                                    </form>
                                </div>
                            </div>


                        </>
                }
            </div>
        </div>
    );
};

export default CustomerReviews;
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Review from './Review';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomerReviews = ({ _id, serviceName, serviceImg }) => {
    const { user } = useContext(AuthContext);
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://jacks-photography.vercel.app/customerReviews?productID=${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
    }, [_id, ignored])



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
            date: new Date()

        }
        fetch('https://jacks-photography.vercel.app/customerReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customerReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Review posted successfully!', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    forceUpdate();
                    setReviews([...reviews]);
                    form.reset();
                }
            })


    }
    return (
        <div className='lg:p-20'>
            <ToastContainer></ToastContainer>

            {
                reviews.length > 0 ? <div className='grid lg:grid-cols-3 mb-5 md:grid-cols-2 gap-20 lg:m-20'>

                    {
                        reviews?.map(review => <Review key={review._id} review={review}></Review>)
                    }

                </div> : <div className='text-center font-semibold text-red-600 '>
                    <h1>No reviews added</h1>
                </div>
            }

            <div>
                {
                    !user ?

                        <>
                            <div className='text-center mb-5 text-2xl font-semibold'>
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
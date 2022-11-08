import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);
    console.log(myReviews)

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyReviews(data);

            })
    }, [user?.email])
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete?');
        if (confirm) {
            return fetch('http://localhost:5000/customerReviews', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: id
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = myReviews.filter(r => r._id !== id);
                        setMyReviews(remaining);
                    }
                })
        }

    }
    return (
        <div>
            {
                myReviews.length !== 0 ?
                    <div className='lg:m-32'>
                        <h1 className='ml-4 mb-3 font-semibold text-2xl'>My reviews</h1>
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">

                                <thead>
                                    <tr>

                                        <th>Service Name</th>
                                        <th>Review message</th>
                                        <th>Update / Delete</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myReviews.map(myReview => <tr key={myReview._id} >

                                            <td>
                                                <div className="flex items-center space-x-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-12 h-12">
                                                            <img src={myReview.serviceImg} alt="Avatar Tailwind CSS Component" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="font-bold">{myReview.serviceName}</div>

                                                    </div>
                                                </div>
                                            </td>
                                            <td>


                                                <span className="badge badge-ghost badge-sm">{myReview.reviewDetails}</span>
                                            </td>
                                            <Link className="btn btn-success mt-3 ">Update</Link>

                                            <th>
                                                <button onClick={() => handleDelete(myReview._id)} className="btn bg-red-600 ">X</button>
                                            </th>
                                        </tr>)
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='text-center h-80 flex items-center justify-center'>
                        <h1>No reviews ware added</h1>
                    </div>
            }
        </div>
    );
};

export default MyReviews;



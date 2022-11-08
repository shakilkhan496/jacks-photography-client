import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyReviews = () => {
    useTitle('MyReviews')
    const { user, logOut } = useContext(AuthContext);
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://jacks-photography.vercel.app/myReviews?email=${user.email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json();
            })
            .then(data => {
                setMyReviews(data);

            })
    }, [user?.email])
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to delete?');
        if (confirm) {
            return fetch('https://jacks-photography.vercel.app/customerReviews', {
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
                        toast.success('Deleted successfully!', {
                            position: "top-center",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                        const remaining = myReviews.filter(r => r._id !== id);
                        setMyReviews(remaining);

                    }
                })
        }

    }
    return (
        <div>
            <ToastContainer></ToastContainer>
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
                                            <Link to={`/updateReview/${myReview._id}`} className="btn btn-success mt-3 ">Update</Link>

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



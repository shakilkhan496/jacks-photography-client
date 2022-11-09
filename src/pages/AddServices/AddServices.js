import React from 'react';
import useTitle from '../../hooks/useTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddServices = () => {
    useTitle('Post services')


    const handlePost = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const img = form.img.value;
        const details = form.details.value;
        const price = form.price.value;

        const postedService = {
            name: name,
            img: img,
            details: details,
            price: price
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
            ,
            body: JSON.stringify(postedService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast.success('Service posted successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    form.reset();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (

        <div className="hero min-h-screen mt-20 bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <ToastContainer></ToastContainer>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handlePost} className="card-body">
                        <h1 className="text-3xl font-bold">Post services</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name='name' type="text" placeholder="service title" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name='img' type="text" placeholder="photo url" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input name='price' type="text" placeholder="set price" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea name='details' className="textarea form-control textarea-warning" placeholder="add details about your service"></textarea>
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-outline">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default AddServices;
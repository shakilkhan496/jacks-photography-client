import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import { updateProfile } from 'firebase/auth';

const SignUp = () => {
    const { createUser, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [authError, setAuthError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setError('Password does not matched');
            toast.error('Password does not matched', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (password.length < 6) {
            setError('Password must be 6 or more characters');
            toast.error('Password must be 6 or more characters', {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
        createUser(email, password)
            .then(() => {
                setLoading(true)


                updateUser(name, photoURL)
                toast.success('Registration success', {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate(from, { replace: true })
                form.reset();

            })
            .catch(error => {
                setAuthError(error.message)
            })

    }


    const updateUser = (name, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
            .then(() => {

            })
            .catch((error) => {
                setError(error)
            })

    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Register here with your full name and your photo URL</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <ToastContainer></ToastContainer>
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input required name='name' type="text" placeholder="Enter your name" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="Insert your photoURL here" className="input input-bordered" />
                        </div>
                        <div className="form-control">

                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Re-enter password</span>
                            </label>
                            <input required name='confirm' type="password" placeholder="confirm password" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text text-red-600 font-bold">{error} {authError}</span>
                            </label>
                            <label className="label">
                                <p>Already have an account ? Log in  <Link to='/login' className="text-blue-600 link link-hover">Here</Link></p>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Sign up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
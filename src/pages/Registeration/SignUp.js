import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const { registerUser } = useContext(AuthContext);


    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password !== confirm) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }
        registerUser(email, password)
            .then((res) => {
                const user = res.user;
            })
            .catch(e => {
                setError(e.message);
            })

        const updateUser = (name, photoUrl) => {

        }


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Signup</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">User Name</span>
                                </label>
                                <input name='name' type="text" placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">YourPhoto URL</span>
                                </label>
                                <input name='url' type="text" placeholder="photoURL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input name='confirm' type="password" placeholder="confirm password" className="input input-bordered" />
                            </div>
                            <div className='text-red-600 font-semibold'>
                                {
                                    error
                                }
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Signup</button>
                            </div>
                            <div>
                                <p>Already have an account ? <Link className='text-blue-600' to='/login'>Login now!!</Link></p>
                            </div>
                        </form>
                        <div className='flex flex-col items-center justify-center space-y-3 mb-10'>
                            <p>Or</p>
                            <p>Log in with</p>
                            <button className='btn btn-primary'>GOOGLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { auth, AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const SignUp = () => {
    useTitle('SignUp')
    const [error, setError] = useState('');
    const { user, registerUser } = useContext(AuthContext);
    console.log(user)
    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';





    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value;
        if (password !== confirm) {
            setError('Passwords do not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        registerUser(email, password)
            .then(res => {
                const user = res.user;
                updateUser(name, photoURL)
                console.log(user)
                navigate(from, { replace: true })


            })
            .catch(err => {
                setError(err.message)
            })

        const updateUser = (name, photoURL) => {
            updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photoURL
            })

        }




    }
    return (
        <div className="hero">
            <div className="hero-content rounded-3xl  flex-col ">
                <div className="text-center p-4  ">
                </div>
                <div className="card flex-shrink-0 w-full  shadow-2xl">


                    {/* Main form */}
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-4xl ">Register</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Name</span>
                            </label>
                            <input required name='name' type="text" placeholder="user name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">PhotoURL</span>
                            </label>
                            <input required name='photoURL' type="text" placeholder="your photoURL" className="input input-bordered" />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Email</span>
                            </label>
                            <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text ">Confirm Password</span>
                            </label>
                            <input required name='confirm' type="password" placeholder="confirm password" className="input input-bordered" />

                        </div>
                        <div className='text-red-600 font-bold'>
                            {
                                error
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline   hover:scale-110 ">Register</button>
                        </div>
                        <div className='mt-4'>
                            <p>Already have an account? <Link to='/login' className='text-sky-500 hover:font-bold'>Login here</Link></p>
                        </div>

                    </form>
                    {/* Form end */}


                </div>
            </div>
        </div>
    );
};

export default SignUp;
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Login = () => {
    const [loading, setLoading] = useState(false);

    useTitle('Login')
    const { emailSignIn, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';



    const handleEmailSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailSignIn(email, password)
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email
                }
                //jwt token

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                    });



                form.reset();
                // sign in success




            })
            .catch(err => {
                setError(err.message);
            })



    }
    const handleGoogleSignin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;
                const currentUser = {
                    email: user.email
                }
                //jwt token

                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true })
                    });
                // sign in success


            })
            .catch(err => {
                setError(err.message);
            })
    }
    return (
        <div className="hero">
            {
                !loading ?
                    <div className="hero-content rounded-3xl  flex-col ">
                        <div className="text-center p-4  ">
                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl">


                            {/* Main form */}
                            <form onSubmit={handleEmailSignIn} className="card-body">
                                <h1 className="text-4xl ">Login</h1>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />

                                </div>
                                <div className='text-red-600 font-bold'>
                                    {
                                        error
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-outline   hover:scale-110 ">Login</button>
                                </div>
                                <div className='mt-4'>
                                    <p>New to us? <Link to='/signup' className='text-sky-500 hover:font-bold'>Register here</Link></p>
                                </div>

                            </form>
                            {/* Form end */}

                            <div className='text-center space-y-5  p-4'>
                                <p>Or </p>
                                <p>Log in with</p>
                                <button onClick={handleGoogleSignin} className='btn bg-sky-600'>GOOGLE</button>

                            </div>
                        </div>
                    </div>
                    : <div className='flex h-60 justify-center items-center'>

                        <h1 className='text-center'> <img className='w-24' src="https://i.gifer.com/ZKZg.gif" alt="" /></h1>
                    </div>
            }
        </div>
    );
};

export default Login;
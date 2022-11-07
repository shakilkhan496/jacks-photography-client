import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/logo/google-svgrepo-com.svg';
import git from '../../assets/logo/github-svgrepo-com.svg'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';


const Login = () => {
    const [error, setError] = useState('');
    const { googleSignIn, gitHubSignIn, setLoading, emailAndPasswordSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        if (password.length < 6) {
            setError('Password must be 6 or more characters')
            return;
        }
        emailAndPasswordSignIn(email, password)
            .then(() => {
                setLoading(true);
                toast.success('Log in success', {
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

            })
            .catch(error => {
                setError(error.message)
            })
            .finally(() => {
                setLoading(false)
            })

    }



    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                setLoading(true);

                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }
    const handleGitHubSignIn = () => {
        gitHubSignIn()
            .then(() => {
                setLoading(true)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200">
            <ToastContainer></ToastContainer>
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login here</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
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
                        {error}
                        <div>
                            <p>New to our website? <Link to='/signup' className='text-blue-700 link-hover'>Register Now!!</Link> .</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                        <hr />
                        <p className='text-center'>Or</p>

                    </form>
                    <div>
                        <button onClick={handleGoogleSignIn} className='btn btn-primary ml-10 btn-outline'>Sign in with Google <img className='w-9 ml-3' src={google} alt='google' /> </button>
                    </div>
                    <div>
                        <button onClick={handleGitHubSignIn} className='btn ml-11 mt-3 mb-3 btn-outline'>Sign in with GitHub <img className='w-9 ml-3' src={git} alt='google' /> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
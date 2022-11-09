import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/favicon.svg';
import '../css.css'

const Headers = () => {
    const { logOut, user } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                //
            })
            .catch(err => {
                console.log(err);
            });
    }


    const navMenus = <>
        <li><Link to='/services' className='text-xl btn btn-ghost mr-3 font-semibold'>Services</Link></li>
        {
            user?.uid ? <div className='lg:flex  items-center space-x-6'>
                <Link to='/myReviews' className='text-xl btn btn-ghost mr-3 font-semibold'>My reviews</Link>
                <Link to='/addService' className='text-xl btn btn-ghost mr-3 font-semibold'>Add service</Link>
            </div> : ''
        }
        <li><Link to='/blogs' className='text-xl btn btn-ghost mr-3 font-semibold'>Blogs</Link></li>


    </>
    return (
        <div>
            <div className="navbar fixed bg-white z-10 top-0 shadow-2xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenus}
                        </ul>
                    </div>
                    <img className='w-14 lg:ml-10' src={logo} alt="" />
                    <Link to='/' className="btn lobster btn-ghost normal-case md:text-2xl text-2xl lg:text-3xl">Jacks<span className='text-blue-600'>Photography</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenus}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ?
                            <div className='flex items-center justify-center space-x-4'>
                                <img className='w-10 h-10 lg:block md:block hidden rounded-full ring-slate-800 ring-offset-2 ring-2' src={user.photoURL} alt=''></img>
                                <button onClick={handleLogOut} className='btn btn-outline'>Logout</button>
                            </div>
                            : <Link to='/login' className='btn btn-outline'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Headers;


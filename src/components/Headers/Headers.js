import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/favicon.svg'

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
            user?.uid ? <div className='lg:flex md:flex items-center space-x-6'>
                <Link to='/myReviews' className='text-xl btn btn-ghost font-semibold'>My reviews</Link>
                <Link to='/addService' className='text-xl btn btn-ghost font-semibold'>Add service</Link>
            </div> : ''
        }

    </>
    return (
        <div>
            <div className="navbar bg-base-100">
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
                    <Link to='/' className="btn btn-ghost normal-case lg:text-3xl">jacks<span className='text-blue-600'>Photography</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navMenus}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid ? <button onClick={handleLogOut} className='btn btn-outline'>Logout</button> : <Link to='/login' className='btn btn-outline'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Headers;
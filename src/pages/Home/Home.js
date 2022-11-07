import React from 'react';
import { Link } from 'react-router-dom';
import HomeServices from '../../components/HomeServices';

const Home = () => {
    return (
        <div className="hero mt-10 min-h-screen bg-base-200">
            <div>
                <div className="hero-content mb-20 flex-col lg:flex-row">
                    <img alt='profile' src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Photography with <span className='text-blue-500'>Jacks</span></h1>
                        <p className="py-6">Hi I am Jacks a professional photographer . Welcome to my website . See my services and hire me for best experience .</p>
                        <Link to='/services' className="btn btn-outline">EXPLORE</Link>
                    </div>

                </div>
                <HomeServices></HomeServices>
            </div>

        </div>
    );
};

export default Home;
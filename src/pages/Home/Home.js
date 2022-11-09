import React from 'react';
import { Link } from 'react-router-dom';
import CountDown from '../../components/CountDown';
import DownHeader from '../../components/DownHeader';
import HomeServices from '../../components/HomeServices';
import useTitle from '../../hooks/useTitle';
import '../../components/css.css'

const Home = () => {
    useTitle('Home')
    return (
        <div className="hero lg:mt-40 md:mt-40 mt-20 min-h-screen ">
            <div>
                <div className="hero-content mb-20 flex-col lg:flex-row">
                    <img data-aos="fade-right" alt='profile' src="https://i.gifer.com/VbW0.gif" className="max-w-sm lg:mr-20 rounded-lg shadow-2xl" />
                    <div data-aos="fade-left">
                        <h1 className="text-5xl font-bold">Photography with <br /> <span className='text-blue-500'>Jacks</span></h1>
                        <p className="py-6">Hi I am Jacks a professional photographer . <br /> Welcome to my website . See my services and hire me <br /> for best experience .</p>
                        <Link to='/services' className="btn btn-outline">EXPLORE</Link>
                    </div>

                </div>
                <HomeServices></HomeServices>
                <CountDown ></CountDown>
                <DownHeader ></DownHeader>

                <figure data-aos="zoom-in" class="mx-auto max-w-screen-md mb-20 text-center">
                    <svg aria-hidden="true" class="mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
                    <blockquote>
                        <p class="text-2xl  font-medium hand-write text-gray-900 dark:text-white">Only photography has been able to divide human life into a series of moments, each of them has the value of a complete existence.</p>
                    </blockquote>
                    <figcaption class="flex justify-center mb-6 items-center mt-6 space-x-3">
                        <img data-aos="zoom-in" className="w-16 ring-slate-600 ring-4 shadow-2xl h-16 rounded-full" src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt='' />
                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <cite class="pr-3 font-medium text-gray-900 dark:text-white">Tom Cat</cite>
                            <cite class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Jacks<span className='text-blue-500 font-semibold'>PhotoGraphy</span></cite>
                        </div>
                    </figcaption>
                </figure>

            </div>

        </div>
    );
};

export default Home;
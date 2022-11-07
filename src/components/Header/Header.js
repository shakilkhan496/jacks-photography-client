import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Transition } from "@headlessui/react";
import logo from '../../assets/icon.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);
    const [mood, setMood] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // alert
            })
            .catch((e) => {
                console.error(e);
            })

    }
    const handleMood = () => {
        setMood(!mood);
    }

    return (
        <div>
            <nav data-aos="zoom-in" className="bg-gray-100 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img
                                    className="h-14 w-14"
                                    src={logo}
                                    alt="quiz-test"
                                />
                                <NavLink to='/'

                                    className=" font-bold  px-3 py-2 rounded-md text-sm "
                                >
                                    <span className="text-4xl"> Tap</span> <span className="text-amber-500 text-4xl">Skills</span>
                                </NavLink>
                            </div>
                            <div className="hidden md:block ml-96">
                                <div className="ml-10 flex items-center space-x-4">


                                    <NavLink to='courses'

                                        className={({ isActive }) => isActive ? ' bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-amber-500 hover:scale-125 transition hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    >
                                        Courses
                                    </NavLink>

                                    <NavLink to='/faq'

                                        className={({ isActive }) => isActive ? ' bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-amber-500 hover:scale-125 transition hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    >
                                        FAQ
                                    </NavLink>
                                    <NavLink to='/blog'

                                        className={({ isActive }) => isActive ? ' bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-amber-500 hover:scale-125 transition hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                    >
                                        Blog
                                    </NavLink>
                                    {
                                        user?.uid ? <><div className='flex items-center space-x-3'>
                                            <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                                                <img className='w-10  rounded-full' src={user.photoURL} alt='name' />
                                            </div>
                                            <div>
                                                <button onClick={handleLogout} className=' p-2 rounded-xl text-white font-semibold transition bg-red-500 btn-outline'>Log out</button>
                                            </div>
                                        </div>
                                        </> :
                                            <NavLink to='/login'

                                                className={({ isActive }) => isActive ? ' bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-amber-500 hover:scale-125 transition hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                            >
                                                Login
                                            </NavLink>
                                    }

                                    <button className='bg-transparent transition  hover:bg-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded' onClick={handleMood}>
                                        {
                                            mood ? 'Dark' : 'Light'
                                        }
                                    </button>




                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="bg-amber-900 inline-flex items-center justify-center p-2 rounded-md text-amber-400 hover:text-white hover:bg-amber-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-amber-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <NavLink to='/courses'

                                    className="hover:bg-amber-700 hover:text-white  block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Courses
                                </NavLink>

                                <NavLink to='/faq'

                                    className="hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    FAQ
                                </NavLink>
                                <NavLink to='/blog'

                                    className="hover:bg-amber-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    blog
                                </NavLink>

                                {
                                    user?.uid ? <><div className='flex items-center space-x-3'>
                                        <div className="tooltip  tooltip-bottom" data-tip={user.displayName}>
                                            <img className='w-10  rounded-full' src={user.photoURL} alt='name' />
                                        </div>
                                        <div>
                                            <button onClick={handleLogout} className=' p-2 rounded-xl text-white font-semibold transition bg-red-500 btn-outline'>Log out</button>
                                        </div>
                                    </div>
                                    </> :
                                        <NavLink to='/login'

                                            className={({ isActive }) => isActive ? ' bg-amber-700 text-white px-3 py-2 rounded-md text-sm font-medium' : 'hover:bg-amber-500 hover:scale-125 transition hover:text-white px-3 py-2 rounded-md text-sm font-medium'}
                                        >
                                            Login
                                        </NavLink>
                                }


                                <button className='bg-transparent transition  hover:bg-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded' onClick={handleMood}>
                                    {
                                        mood ? 'Dark' : 'Light'
                                    }
                                </button>




                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};

export default Header;
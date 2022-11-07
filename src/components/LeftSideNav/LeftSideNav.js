import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const LeftSideNav = () => {
    const { categories } = useContext(AuthContext);

    return (
        <div className='space-y-5 mx-3 text-center my-20'>

            {
                categories ? categories.map(category => <Link className='block bg-transparent transition hover:bg-amber-500 text-amber-700 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded'
                    key={category.id}
                    to={`/courses/${category.id}`}>{category.title}</Link>) : ''
            }
        </div>
    );
};

export default LeftSideNav;
import React from 'react';
import { useContext } from 'react';
import AllCategoriesCard from '../../components/AllCategoriesCard/AllCategoriesCard';
import LeftSideNav from '../../components/LeftSideNav/LeftSideNav';
import { AuthContext } from '../../contexts/AuthProvider';

const Courses = () => {
    const { categories } = useContext(AuthContext);


    return (
        <div>
            <div className='lg:flex mx-10'>
                <div className='border-2 lg:w-1/5'>
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className='border-2 grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-5 grow'>
                    {
                        categories ? categories.map(category => <AllCategoriesCard key={category.id} category={category}></AllCategoriesCard>) : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;
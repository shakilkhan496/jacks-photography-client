import React from 'react';

const Review = ({ review }) => {
    const { userName, reviewDetails, userImg } = review;
    return (
        <figure data-aos="zoom-in" class="mx-auto border border-gray-500 p-5 rounded-2xl max-w-screen-md text-center">
            <svg aria-hidden="true" class="mx-auto mb-2 w-10 h-12 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"></path></svg>
            <blockquote>
                <p class="text-2xl  font-medium hand-write text-gray-900 dark:text-white">{reviewDetails}</p>
            </blockquote>
            <figcaption class="flex justify-center mb-6 items-center mt-6 space-x-3">
                <img className="w-16 ring-slate-600 ring-4 shadow-2xl h-16 rounded-full" src={userImg} alt='' />
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <cite class="pr-3 font-medium text-gray-900 dark:text-white"></cite>
                    <cite class="pl-3 text-sm font-semibold text-gray-500 dark:text-gray-400">{userName}</cite>
                </div>
            </figcaption>
        </figure>
    );
};

export default Review;
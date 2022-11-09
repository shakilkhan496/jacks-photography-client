import React from 'react';

const CountDown = () => {
    return (
        <div data-aos="zoom-in" className='flex flex-col justify-center items-center mt-40 mb-40 p-10 rounded-3xl bg-black text-white'>
            <div>
                <h1 className='lg:text-4xl font-bold mb-5'>Special offer <span className='text-red-600'>closes</span> in</h1>
            </div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
            </div>
        </div>
    );
};

export default CountDown;
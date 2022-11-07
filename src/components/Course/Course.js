import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from 'react-to-pdf';


const ref = React.createRef();


const Course = () => {
    const course = useLoaderData();
    const { title, image, details, features, id } = course;


    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button className='btn bg-red-700 float-right' onClick={toPdf}>Get Pdf</button>}
            </Pdf>
            <div ref={ref} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image} alt={title} className="max-w-sm w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <p className="py-6">{details}</p>
                        <hr />
                        <h2 className='mt-4 font-semibold text-xl'>Our commitments:-</h2>
                        {
                            features ? features.map(feature => <li className='mt-3'>{feature.feature}</li>) : ''
                        }
                        <Link to={`/courses/checkout/${id}`} className='btn mt-6'>Get premium access</Link>
                    </div>

                </div>

            </div>

        </div>

    );
};

export default Course;
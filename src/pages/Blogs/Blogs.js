import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='lg:mx-60 bg-amber-200 rounded-2xl p-7 space-y-5 my-5'>
                <h1 className='text-2xl '>What is cors?</h1>
                <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            </div>
            <div className='lg:mx-60 bg-amber-200 rounded-2xl p-7 space-y-5 my-5'>
                <h1 className='text-2xl '>Why are you using firebase?</h1>
                <p>The Firebase Realtime Database lets me build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. That's why I am using firebase</p>
                <h1 className='text-2xl '>What other options do you have to implement authentication?</h1>
                <p>STYTCH , Ory , Supabase ,Okta ,PingIdentity ,Keycloak ,Frontegg etc can be alternative of firebase.</p>
            </div>
            <div className='lg:mx-60 bg-amber-200 rounded-2xl p-7 space-y-5 my-5'>
                <h1 className='text-2xl '>How does private route work?</h1>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated.</p>
            </div>
            <div className='lg:mx-60 bg-amber-200 rounded-2xl p-7 space-y-5 my-5'>
                <h1 className='text-2xl '>What is Node?</h1>
                <p>Node.js is an open-source, cross-platform,
                    back-end JavaScript runtime environment
                    that runs on the V8 engine and executes
                    JavaScript code outside a web browser.</p>
                <h1 className='text-2xl '>How does node work?</h1>
                <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
            </div>

        </div>
    );
};

export default Blogs;
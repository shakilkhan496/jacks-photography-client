import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className='space-y-8 mb-10 mt-10'>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Differences between SQL and NoSQL?</h2>
                    <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                </div>
            </div>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is JWT and how does it work?</h2>
                    <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
                    <p>
                        JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                    </p>
                </div>
            </div>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">What is the differences between JavaScript and NodeJs?</h2>
                    <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
                </div>
            </div>
            <div className="card mx-auto w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">How does nodeJS handle multiple request at the same time?</h2>
                    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;
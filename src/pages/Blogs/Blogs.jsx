import Aos from 'aos';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Blogs = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='my-container py-16'>
            <Helmet>
                <title>Turbo Thriller - Blogs </title>
            </Helmet>
            <h1 className="text-center font-semibold text-4xl lg:mb-8 mb-4">Blogs</h1>
            <div className='bg-white rounded-md shadow-lg border lg:px-8 px-4 py-3' data-aos='fade-up' data-aos-duration='800'>
                <h1 className='text-2xl font-semibold'>Q1.What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p className='ps-3 text-lg pt-3'>An access token is a short-lived credential used to access specific resources or perform actions on behalf of a user. A refresh token is a long-lived credential used to obtain a new access token when the current one expires. They are then sent with each subsequent API request to authenticate and authorize the user. Refresh tokens are used to obtain new access tokens without requiring the user to re-authenticate. On the client-side, access tokens and refresh tokens should be stored securely, such as in browser memory, session storage, or HTTP-only cookies, to prevent unauthorized access and protect user data.</p>
            </div>
            <div className='bg-white rounded-md shadow-lg border lg:px-8 px-4 py-3 mt-4' data-aos='fade-up' data-aos-duration='1100'>
                <h1 className='text-2xl font-semibold'>Q2.Compare SQL and NoSQL databases?</h1>
                <p className='ps-3 text-lg pt-3'>SQL databases use structured data models, predefined schemas, and SQL query language. They are suitable for complex relationships and transactions. NoSQL databases use flexible data models, scale horizontally, and have varied query languages. They are ideal for handling large amounts of unstructured data and achieving high scalability.SQL databases typically follow a client-server architecture, where the database is hosted on a server and the client communicates with it through a connection. NoSQL databases can be used in similar client-server architectures or embedded directly into client applications, depending on the specific database and use case.</p>
            </div>
            <div className='bg-white rounded-md shadow-lg border lg:px-8 px-4 py-3 mt-4' data-aos='fade-up' data-aos-duration='1200'>
                <h1 className='text-2xl font-semibold'>Q3.What is express js? What is Nest JS ?</h1>
                <p className='ps-3 text-lg pt-3'>Express.js is a lightweight web application framework for Node.js that simplifies the process of building web applications and APIs. NestJS, on the other hand, is a powerful and extensible framework for building server-side applications using TypeScript and follows a modular and scalable architecture.</p>
            </div>
            <div className='bg-white rounded-md shadow-lg border lg:px-8 px-4 py-3 mt-4' data-aos='fade-up' data-aos-duration='1200'>
                <h1 className='text-2xl font-semibold'>Q4.What is MongoDB aggregate and how does it work?</h1>
                <p className='ps-3 text-lg pt-3'>MongoDB's aggregate function is a powerful feature that allows us to perform advanced data processing and analysis tasks by defining a series of stages. Each stage represents a specific operation, such as filtering, grouping, or sorting, and the output of one stage serves as the input for the next. It enables us to perform complex queries and aggregations on our data in a flexible and efficient manner.</p>
            </div>

        </div>
    );
};

export default Blogs;
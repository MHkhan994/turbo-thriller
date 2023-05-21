import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='bg-indigo-300 w-full h-screen'>
            <div className='my-container justify-center flex flex-col h-full w-full items-center'>
                <div className='flex justify-center'>
                    <img className='h-full w-fit' src="/error.png" alt="" />
                </div>
                <h2 className='text-center text-4xl font-semibold'>Oh no! You have lost your way</h2>
                <div className='py-6'>
                    <span className='text-xl'> You can go back to: </span>
                    <Link className='my-btn-primary' to='/'>Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
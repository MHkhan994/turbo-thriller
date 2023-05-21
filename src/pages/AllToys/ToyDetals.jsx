import Aos from 'aos';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';

const ToyDetals = () => {
    const toy = useLoaderData()
    const { name, description, seller_name, rating, picture, price, quantity, seller_email } = toy

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className='my-container py-16 px-4'>
            <Helmet>
                <title>Turbo Thriller - {toy.name} </title>
            </Helmet>
            <div className='grid lg:grid-cols-2 gap-4'>
                <img data-aos='fade-right' data-aos-duration='1000' src={picture} alt="" />
                <div data-aos='fade-down' data-aos-duration='600'>
                    <h2 className='text-3xl font-semibold'>Toy: {name}</h2>
                    <div className='space-y-2 pt-4 text-lg text-gray-600'>
                        <p><span className='font-semibold text-black'>Seller Name</span> {seller_name}</p>
                        <p><span className='font-semibold text-black'>Seller Email:</span> {seller_email}</p>
                        <p><span className='font-semibold text-black'>Available:</span> {quantity}</p>
                        <p><span className='font-semibold text-black'>Price:</span> {price}</p>
                        <p><span className='font-semibold text-black'>Rating: </span> {rating}</p>
                    </div>
                    <p className='text-lg italic pt-4'><span className='font-semibold'>Description:</span> {description}</p>
                    <button className='my-btn-primary mt-4'>Buy</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetals;
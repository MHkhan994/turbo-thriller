import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ToyDetals = () => {
    const toy = useLoaderData()
    const { name, description, seller_name, rating, picture, price, quantity, seller_email } = toy
    console.log(toy);

    return (
        <div className='my-container py-16'>
            <div className='grid lg:grid-cols-2 gap-4'>
                <img src={picture} alt="" />
                <div>
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
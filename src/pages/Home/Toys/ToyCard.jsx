import React from 'react';

const ToyCard = ({ toy }) => {

    const { picture } = toy

    return (
        <div className="card bg-gray-50 shadow-xl border p-3 rounded-lg">
            <img src={toy.picture} className='rounded-lg' alt="" />
            <div className="card-body p-4">
                <h2 className="text-3xl font-semibold">{toy.name}</h2>
                <h3 className='text-xl'>{toy.subcategory}</h3>
                <hr />
                <div className='space-y-1'>
                    <p><span className='font-semibold text-lg'>Price:</span> {toy.price}</p>
                    <hr />
                    <p><span className='font-semibold text-lg'>Available:</span> {toy.quantity}</p>
                    <hr />
                    <p><span className='font-semibold text-lg'>Rating:</span> {toy.rating}</p>
                    <hr />
                    <p><span className='font-semibold text-lg'>Description:</span> {toy.description}</p>
                    <hr />
                </div>
                <div className='flex justify-end gap-2 text-xl pt-2'>

                </div>
            </div>
        </div>
    );
};

export default ToyCard;
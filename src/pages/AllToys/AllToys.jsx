import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const toys = useLoaderData()
    console.log(toys);

    return (
        <div className='min-h-screen my-container'>
            <div className="overflow-x-auto w-full py-16">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-orange-600 text-lg capitalize'>Seller</th>
                            <th className='text-orange-600 text-lg capitalize'>Toy Name</th>
                            <th className='text-orange-600 text-lg capitalize'>Sub-category</th>
                            <th className='text-orange-600 text-lg capitalize'>Price</th>
                            <th className='text-orange-600 text-lg capitalize'>Quantity</th>
                            <th className='text-orange-600 text-lg capitalize'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <tr key={toy._id}>
                                <td>
                                    <img className='w-16' src={toy.picture} alt="" />
                                </td>
                                <td className='text-purple-700 font-semibold'>
                                    {toy.seller_name}
                                </td>
                                <td className='font-semibold text-lime-600'>
                                    {toy.name}
                                </td>
                                <td className='text-blue-700'>
                                    {toy.subcategory}
                                </td>
                                <td className='text-green-600'>
                                    {toy.price}
                                </td>
                                <td className='text-red-600 font-semibold'>
                                    {toy.quantity}
                                </td>
                                <td>
                                    <Link to={`/toyDetails/${toy._id}`} className='bg-[#FC7800] px-2 rounded-sm text-white'>Details</Link>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllToys;
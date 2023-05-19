import Aos from 'aos';
import 'aos/dist/aos.css'
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLoaderData } from 'react-router-dom';
import SyncLoader from "react-spinners/SyncLoader";


const AllToys = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const [toys, setToys] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const loadedToys = useLoaderData()
    const totalToys = loadedToys.totalToys;
    const totalPages = Math.ceil(totalToys / 20);


    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }


    useEffect(() => {
        fetch(`http://localhost:5000/toyLimit?page=${currentPage}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
                setLoading(false)
            })
    }, [currentPage])

    if (loading) {
        return (
            <div className='h-[80vh] flex justify-center items-center'>
                <SyncLoader
                    color={'#004485'}
                    loading={loading}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        )
    }

    return (
        <div className='min-h-screen my-container'>
            <Helmet>
                <title>Turbo Thriller- All Toys</title>
            </Helmet>
            <div className="overflow-x-auto w-full pt-16 pb-8">
                <table data-aos="fade-down"
                    data-aos-duration='700'
                    className="table w-full">
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
            <h2 className='text-center'>Page: {currentPage}</h2>
            <div className='flex gap-2 justify-center flex-wrap text-center bg-[#004485] shadow-lg border py-2 px-5 mx-auto w-fit mb-4 rounded-md min-w-[20%]'>
                {
                    pages.map(p => <button
                        key={p}
                        onClick={() => setCurrentPage(p)}
                        className={currentPage === p ? 'py-1 px-4 rounded-md bg-orange-500 shadow-md'
                            : 'py-1 px-4 rounded-md bg-gray-50 shadow-md'}
                    >
                        {p}
                    </button>)
                }
            </div>
        </div >
    );
};


export default AllToys;
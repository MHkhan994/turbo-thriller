import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#05071d]'>
            <div className='grid my-container lg:grid-cols-[1fr_2fr] text-white'>
                <div className='p-5 rounded-lg'>
                    <div className='flex items-center'>
                        <img className='w-20' src="logo.png" alt="" />
                        <h1 className='lg:text-4xl text-2xl pe-7 font-bold italic'>Turbo Thriller</h1>
                    </div>
                    <p className='text-lg lg:text-xl font-semibold'>Play, Learn, and Explore!</p>
                    <p className='py-5 text-md text-gray-400'>Discover a world of endless fun and imagination at Turbo Thriller. We're dedicated to bringing smiles to children's faces with our exciting range of toys and games.</p>
                    <div className='pb-4'>
                        <p>123 ABC Road, Gulshan-1</p>
                        <p>Dhaka 1212, Bangladesh</p>
                    </div>
                    <div className='flex gap-5'>
                        <a target='_blank' href="https://www.facebook.com/mahmudkhan.mahmudkhan.125/">
                            <FaFacebook className='text-blue-700 text-4xl' />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/mahmudkhan.mahmudkhan.125/">
                            <FaInstagram className='text-red-500 text-4xl' />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/mahmudkhan.mahmudkhan.125/">
                            <FaTwitter className='text-blue-400 text-4xl' />
                        </a>
                        <a target='_blank' href="https://www.facebook.com/mahmudkhan.mahmudkhan.125/">
                            <FaYoutube className='text-red-600 text-4xl' />
                        </a>
                    </div>
                    <div className='pt-5'>
                        <h2 className='text-2xl font-semibold mb-2'>Welcome Newcommer</h2>
                        <button className='my-btn-primary'>
                            <Link to='/register'>Register</Link>
                        </button>
                    </div>
                </div>
                <div className='grid justify-end h-full items-center'>
                    <img src="footer.png" alt="" />
                </div>
            </div>
            <p className='text-center text-gray-500 py-4'>Copyright @ 2022 TurboThriller || All Rights Reserved</p>
        </div>
    );
};

export default Footer;
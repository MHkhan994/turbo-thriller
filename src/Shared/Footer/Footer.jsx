import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-gray-500 lg:h-[70vh] h-[90vh] relative'>
            <img className='w-full h-full object-cover' src="footer.png" alt="" />
            <div className='p-5 rounded-lg absolute lg:top-0 top-[13%] md:top-[30%] text-black lg:w-1/3 w-3/4 lg:left-[9%] left-[4%]'>
                <div className='flex items-center'>
                    <img className='w-20' src="logo.png" alt="" />
                    <h1 className='lg:text-4xl text-2xl pe-7 font-bold italic'>Turbo Thriller</h1>
                </div>
                <p className='text-lg lg:text-xl font-semibold'>Play, Learn, and Explore!</p>
                <p className='text-gray-700 py-7 text-md'>Discover a world of endless fun and imagination at Turbo Thriller. We're dedicated to bringing smiles to children's faces with our exciting range of toys and games.</p>
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
                <div className='pt-7'>
                    <h2 className='text-2xl font-semibold mb-2'>Welcome Newcommer</h2>
                    <button className='my-btn-primary'>
                        <Link onTouchCancel='/register'>Register</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
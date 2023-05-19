import React from 'react';
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'

const Banner = () => {

    return (
        <div className='h-[95vh]' data-aos='fade-down'>
            <img className='lg:w-full h-full object-cover' src="banner.png" alt="" />
            <div className='absolute lg:top-1/2 top-[43%] lg:left-[9%] left-[4%] text-white lg:w-1/2 w-3/4 space-y-5'>
                <h1 className='lg:text-5xl text-3xl lg:pe-7 p-0 font-semibold'>Play, Create, and Let Your Dreams Take Flight!</h1>
                <button className='py-2'>
                    <Link className='my-btn-primary' to='/allToys'>See all Toys</Link>
                </button>
            </div>
        </div>
    );
};

export default Banner;
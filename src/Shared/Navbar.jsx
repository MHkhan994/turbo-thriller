import React from 'react';
import { NavLink, Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='bg-[#004485]'>
            <div className="navbar my-container text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="mt-6 text-black menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/allToys'>All Toys</NavLink></li>
                            <li><NavLink to='/myToys'>My Toys</NavLink></li>
                            <li><NavLink to='/addToy'>Add a Toy</NavLink></li>
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <img src="logo.png" className='w-10 lg:w-20' alt="" />
                    <button>
                        <Link className='text-lg lg:text-3xl font-bold italic' to='/'>TurboThriller</Link>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-2 text-lg space-x-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allToys'>All Toys</NavLink></li>
                        <li><NavLink to='/myToys'>My Toys</NavLink></li>
                        <li><NavLink to='/addToy'>Add a Toy</NavLink></li>
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link className='my-btn-primary' to='/login'>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
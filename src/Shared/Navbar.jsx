import React, { useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';
import { Tooltip } from 'react-tooltip'
import Swal from 'sweetalert2';

const Navbar = () => {
    const navigate = useNavigate()

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        Swal.fire({
            title: 'Are you sure you want to log out?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out',
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => {
                        navigate('/')
                    })
                    .catch(error => console.log(error))
            }
        })

    }

    return (
        <div className='bg-[#004485]'>
            <div className="navbar my-container text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="mt-6 text-black menu menu-compact dropdown-content p-2 shadow bg-base-100 rounded-box w-52">
                            <div className='flex ps-3 pt-2'>
                                <img src="logo.png" className='w-10 lg:w-20' alt="" />
                                <button>
                                    <Link className='text-lg lg:text-3xl font-bold italic' to='/'>TurboThriller</Link>
                                </button>
                            </div>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/allToys'>All Toys</NavLink></li>
                            {
                                user && <>
                                    <li><NavLink to='/myToys'>My Toys</NavLink></li>
                                    <li><NavLink to='/addToy'>Add a Toy</NavLink></li>
                                </>
                            }
                            <li><NavLink to='/blogs'>Blogs</NavLink></li>
                        </ul>
                    </div>
                    <img src="logo.png" className='w-10 lg:w-20 hidden lg:block' alt="" />
                    <button className='hidden lg:block'>
                        <Link className='text-lg lg:text-3xl font-bold italic' to='/'>TurboThriller</Link>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 px-2 text-lg space-x-2">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allToys'>All Toys</NavLink></li>
                        {
                            user && <>
                                <li><NavLink to='/myToys'>My Toys</NavLink></li>
                                <li><NavLink to='/addToy'>Add a Toy</NavLink></li>
                            </>
                        }
                        <li><NavLink to='/blogs'>Blogs</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className='flex gap-3 items-center'>
                            <a className='my-anchor-element cursor-pointer'>
                                <Tooltip className='z-10' anchorSelect=".my-anchor-element" place="left">
                                    {user.displayName}
                                </Tooltip>
                                <img className='w-10 h-10 rounded-full' onError={(e) => { e.target.src = 'profile.jpg' }} src={user.photoURL} alt="" />
                            </a>
                            <button onClick={handleLogout} className='my-btn-primary'>Logout</button>
                        </div> :
                            <Link className='my-btn-primary' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
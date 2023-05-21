import React, { useCallback, useContext, useState } from 'react';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { FaBars, FaMinus } from 'react-icons/fa';
import { BiX } from "react-icons/bi";
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate()

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
                setIsOpen(false)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='py-2 bg-[#004485] relative'>
            <div className='my-container relative hidden lg:block'>
                <div className='flex justify-between text-white items-center'>
                    <div className='flex items-center'>
                        <img className='w-20' src="/logo.png" alt="" />
                        <Link to='/' className='text-3xl font-bold italic'>TurboThriller</Link>
                    </div>
                    <div className='flex justify-between gap-8 text-lg items-center'>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/allToys'>All Toys</NavLink>
                        {
                            user && <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''} to='/myToys'>My Toys</NavLink>
                        }
                        {
                            user && <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''} to='/addToy'>Add a Toy</NavLink>
                        }
                        <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/blogs'>Blogs</NavLink>
                    </div>
                    <div className='flex items-center gap-5'>
                        {
                            user ? <div className='flex gap-3 items-center'>
                                <a className='my-anchor-element cursor-pointer'>
                                    <Tooltip className='z-10' anchorSelect=".my-anchor-element" place="left">
                                        {user.displayName}
                                    </Tooltip>
                                    <img className='h-10 w-10 rounded-full' onError={(e) => { e.target.src = 'profile.jpg' }} src={user.photoURL} alt="" />
                                </a>
                                <button onClick={handleLogOut} className='my-btn-primary'>Logout</button>
                            </div> :
                                <Link className='my-btn-primary' to='/login'>Login</Link>
                        }
                    </div>
                </div>
            </div>
            <div className='lg:hidden container'>
                <div className='flex justify-between px-4'>
                    <button className='inline'
                        onClick={() => setIsOpen(true)}
                    >
                        <FaBars className='w-8 h-8 text-white' />

                    </button>
                    <div className='flex items-center gap-5'>
                        {
                            user ? <div className='flex gap-3 items-center'>
                                <a className='my-anchor-element cursor-pointer'>
                                    <Tooltip className='z-10' anchorSelect=".my-anchor-element" place="right">
                                        {user.displayName}
                                    </Tooltip>
                                    <img className='h-10 w-10 rounded-full' onError={(e) => { e.target.src = 'profile.jpg' }} src={user.photoURL} alt="" />
                                </a>
                                <button onClick={handleLogOut} className='my-btn-primary'>Logout</button>
                            </div> :
                                <Link className='my-btn-primary' to='/login'>Login</Link>
                        }
                    </div>
                </div>
                {isOpen && (
                    <div className='w-2/3 absolute top-2 left-2 z-20 bg-gray-100 shadow-lg rounded-md'>
                        <div className='text-black my-container py-5 relative'>
                            <button className='absolute right-0'
                                onClick={() => setIsOpen(false)}
                            >
                                <BiX className='w-8 h-8 text-black text-2xl' />

                            </button>
                            <div className='flex flex-col gap-2 text-lg'>
                                <div className='flex items-center'>
                                    <img className='w-10' src="/logo.png" alt="" />
                                    <Link to='/' className='text-2xl font-semibold'>Turbo Thriller</Link>
                                </div>
                                <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-1 border-[#0000]'} onClick={() => setIsOpen(false)} to='/'>Home</NavLink>
                                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/allToys'>All Toys</NavLink>
                                {
                                    user && <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''} to='/myToys'>My Toys</NavLink>
                                }
                                {
                                    user && <NavLink onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? 'active' : ''} to='/addToy'>Add a Toy</NavLink>
                                }
                                <NavLink className={({ isActive }) => isActive ? 'active' : 'border-b-1 border-[#0000]'} onClick={() => setIsOpen(false)} to='/blogs'>Blogs</NavLink>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};


export default Navbar;
import React, { useContext, useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

const Login = () => {

    const { googleSignIn, logIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const loaction = useLocation()
    const from = loaction.state?.from.pathname || '/'


    useEffect(() => {
        Aos.init()
    }, [])


    const handleGooleLogin = () => {
        googleSignIn()
            .then(result => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: `welcome ${result.user.displayName}`,
                    showConfirmButton: false,
                    timer: 2500
                })
                navigate(from)
            })
            .catch(error => console.log(error))
    }


    const handleLogIn = (e) => {
        e.preventDefault()
        setError('')
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                Swal.fire({
                    position: 'top-middle',
                    icon: 'success',
                    title: `welcome ${result.user.displayName}`,
                    showConfirmButton: false,
                    timer: 2500
                })
                navigate(from)
            })
            .catch(error => {
                if (error.message.includes('wrong-password')) {
                    setError('wrong password')
                }
                else if (error.message.includes('user-not-found')) {
                    setError('wrong email address')
                }
                else if (error.message.includes('too-many-requests')) {
                    setError('too many tries. Please try again later')
                }
                console.log(error.message);
            })
    }


    return (
        <div>
            <Helmet>
                <title>Turbo Thriller - Login </title>
            </Helmet>
            <h1 className="text-center font-semibold text-4xl lg:mt-16 mt-8 lg:mb-4 mb-2">Login</h1>
            <div className="hero min-h-screen my-container">
                <div className="grid lg:grid-cols-2 mb-20 items-center gap-5 w-full">
                    <div data-aos-duration="1000" data-aos='fade-up' className="text-center lg:text-left order-2 lg:order-1">
                        <img className='rounded-lg' src="login.jpg" alt="" />
                    </div>
                    <div data-aos='fade-down' data-aos-duration="700" className="card w-full bg-base-100 border">
                        <form onSubmit={handleLogIn} className="w-full pb-3 p-6 pt-10  rounded-lg">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required name='email' type="email" placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            </div>
                            <p className='text-red-600'>{error}</p>
                            <div className="form-control mt-6">
                                <button className="my-btn-primary h-12">Login</button>
                            </div>
                        </form>
                        <div className='px-6 pb-10'>
                            <button onClick={handleGooleLogin} className='text-xl gap-2 flex justify-center items-center text-white bg-blue-600 rounded-md h-12 w-full'>
                                <span>Login with </span><FaGoogle />
                            </button>
                            <p className='text-center pt-3 text-xl'>New here? <Link className='text-blue-500' to='/register'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
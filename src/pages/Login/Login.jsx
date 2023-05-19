import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const loaction = useLocation()

    const from = loaction.state?.from.pathname || '/'

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
            .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="hero min-h-screen my-container">
                <div className="grid lg:grid-cols-2 my-20 items-center gap-5 w-full">
                    <div className="text-center lg:text-left order-2">
                        <img className='rounded-lg' src="login.jpg" alt="" />
                    </div>
                    <div className="card w-full bg-base-100 border">
                        <form onSubmit={handleLogIn} className="w-full p-6 pt-10  rounded-lg">
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
                            <div className="form-control mt-6">
                                <button className="my-btn-primary">Login</button>
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
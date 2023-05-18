import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const { signUp } = useContext(AuthContext)

    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        signUp(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name
                })
                form.reset()
            })
            .catch(error => console.log(error))
    }

    return (
        <div >
            <div className="hero min-h-screen my-container">
                <div className="grid lg:grid-cols-2 my-20 items-center gap-5 w-full">
                    <div className="card w-full bg-base-100 border">
                        <form onSubmit={handleSignUp} className="w-full p-6 pt-10  rounded-lg">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required name='name' type="text" placeholder="your name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input required name='photo' type="text" placeholder="photo Url" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="my-btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='px-6 pb-10'>
                            <button className='text-xl gap-2 flex justify-center items-center text-white bg-blue-600 rounded-md h-12 w-full'>
                                <span>Sign Up with </span><FaGoogle />
                            </button>
                            <p className='text-center pt-3 text-xl'>Already have an Account? <Link className='text-blue-500' to='/login'>Login</Link></p>
                        </div>
                    </div>
                    <div className="text-center lg:text-left h-full">
                        <img className='rounded-lg h-full' src="signup.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Register;
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { HiTrash } from "react-icons/hi2";
import { Link, json } from 'react-router-dom';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'

const MyToys = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const [toys, setToys] = useState([])
    const { user, loading } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/myToys/${user.email}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [user])


    const handleDeleteToy = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myToys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                            const remaining = toys.filter(t => t._id !== id)
                            setToys(remaining)
                        }
                    })
            }
        })

    }

    return (
        <div className='min-h-[90vh] my-container py-16'>
            <h2 className='text-center text-4xl font-semibold pb-6 '>My Toys</h2>
            {
                toys.length == 0 && <div className='flex h-[40vh] justify-center items-center text-2xl text-gray-400'>
                    <h2>You currently have no toys.Add some <Link className='text-blue-400' to='/addToy'>Toys.</Link></h2>
                </div>
            }
            <div data-aos="fade-up"
                data-aos-duration='1000' className='grid lg:grid-cols-3 gap-4'>
                {
                    toys.map(toy => <div key={toy._id}>
                        <div className="card bg-base-100 shadow-xl border h-full">
                            <figure><img src={toy.picture} onError={(e) => { e.target.src = "altImg.jpg"; }}></img></figure>
                            <div className="card-body">
                                <h2 className="text-3xl font-semibold">{toy.name}</h2>
                                <h3 className='text-xl'>{toy.subcategory}</h3>
                                <hr />
                                <div className='space-y-2'>
                                    <p><span className='font-semibold text-lg'>Price:</span> {toy.price}</p>
                                    <hr />
                                    <p><span className='font-semibold text-lg'>Available:</span> {toy.quantity}</p>
                                    <hr />
                                    <p><span className='font-semibold text-lg'>Rating:</span> {toy.rating}</p>
                                    <hr />
                                    <p><span className='font-semibold text-lg'>Description:</span> {toy.description}</p>
                                    <hr />
                                </div>
                                <div className='flex justify-end gap-2 text-xl pt-2'>
                                    <Link className='px-3 text-white bg-orange-600 rounded-sm' to={`/updateToy/${toy._id}`}>Update</Link>
                                    <button onClick={() => handleDeleteToy(toy._id)} className='px-2 text-white bg-red-600 rounded-sm'>
                                        <HiTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyToys;
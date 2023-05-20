import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { HiTrash } from "react-icons/hi2";
import { Link, json } from 'react-router-dom';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

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
        <div className='min-h-[90vh] my-container py-8 lg:py-16'>
            <Helmet>
                <title>Turbo Thriller- My Toys</title>
            </Helmet>
            <h2 className='text-center text-4xl font-semibold pb-6 '>My Toys</h2>
            <div data-aos="fade-down"
                data-aos-duration='1000'>
                <table
                    className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th className='text-orange-600 text-lg capitalize'>Toy Name</th>
                            <th className='text-orange-600 text-lg capitalize'>Sub-category</th>
                            <th className='text-orange-600 text-lg capitalize'>Price</th>
                            <th className='text-orange-600 text-lg capitalize'>Quantity</th>
                            <th className='text-orange-600 text-lg capitalize'>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <tr key={toy._id}>
                                <td>
                                    <img className='w-16' src={toy.picture} alt="" />
                                </td>
                                <td className='font-semibold text-lime-600'>
                                    {toy.name}
                                </td>
                                <td className='text-blue-700'>
                                    {toy.subcategory}
                                </td>
                                <td className='text-green-600'>
                                    {toy.price}
                                </td>
                                <td className='text-red-600 font-semibold'>
                                    {toy.quantity}
                                </td>
                                <td className='flex gap-1 items-center'>
                                    <Link to={`/updateToy/${toy._id}`} className='bg-[#FC7800] px-4 py-1 rounded-sm text-white'>Update</Link>
                                    <button className='bg-red-600 p-2 rounded-sm' onClick={() => handleDeleteToy(toy._id)}>
                                        <HiTrash className='text-md'></HiTrash>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;
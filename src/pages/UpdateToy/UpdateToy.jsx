import React, { useEffect, useState } from 'react';
import { json, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData()
    const navigate = useNavigate()

    const handleUpdateToy = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const subcategory = form.category.value;
        const description = form.description.value;

        const updateToy = {
            name: name || toy.name,
            picture: picture || toy.picture,
            price: price ? `$${price}` : toy.price,
            quantity: quantity || toy.quantity,
            subcategory: subcategory || toy.subcategory,
            description: description || toy.description
        }

        fetch(`http://localhost:5000/myToys/${toy._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateToy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.matchedCount > 0 && data.acknowledged == true) {
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'Toy updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/mytoys')
                }
            })
    }

    return (
        <div className='my-container py-16'>
            <h1 className='text-4xl font-semibold text-center'>Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="w-full p-6 rounded-lg">
                <div className=' grid lg:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder={toy.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input name='picture' type="text" placeholder={toy.picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="number" placeholder={toy.price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' type="number" placeholder={toy.quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <select name='category' className='input input-bordered' placeholder={toy.subcategory}>
                            <option value="Multi-Lane Races">Multi-Lane Races</option>
                            <option value="Loop Track Adventures">Loop Track Adventures</option>
                            <option value="Pull-Back Cars">Pull-Back Cars</option>
                            <option value="Push Cars">Push Cars</option>
                            <option value="Pedal Power Cars">Pedal Power Cars</option>
                            <option value="Electric Drive Cars">Electric Drive Cars</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Description</span>
                        </label>
                        <textarea name='description' placeholder='give a short discription of your toy.' className='input input-bordered h-36 resize-none'></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn-primary">Add Toy</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const toy = useLoaderData()
    const navigate = useNavigate()


    useEffect(() => {
        Aos.init()
    }, [])


    const handleUpdateToy = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const subcategory = form.category.value;
        const description = form.description.value;
        const rating = form.rating.value;

        if (parseInt(rating) < 0 || parseInt(rating) > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Rating should be a number between 4-5",
            })
            return
        }

        else if (isNaN(rating)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Rating should be a number",
            })
            return
        }

        if (quantity < 0 || price < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "quantity can't be negative",
            })
            return
        }

        const updateToy = {
            name: name || toy.name,
            picture: picture || toy.picture,
            price: price ? `$${price}` : toy.price,
            quantity: quantity || toy.quantity,
            subcategory: subcategory || toy.subcategory,
            description: description || toy.description,
            rating: rating || toy.rating
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
        <div data-aos='fade-down' data-aos-duration='800' className='my-container py-8 lg:py-16'>
            <Helmet>
                <title>Turbo Thriller-Update - {toy.name} </title>
            </Helmet>
            <h1 className='text-4xl font-semibold text-center'>Update Toy</h1>
            <form onSubmit={handleUpdateToy} className="w-full p-6 rounded-lg">
                <div className=' grid lg:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" defaultValue={toy.name} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input name='picture' type="text" defaultValue={toy.picture} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input name='price' type="number" defaultValue={parseInt(toy.price.split('$')[1])} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input name='quantity' type="number" defaultValue={toy.quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input name='rating' type="text" defaultValue={toy.rating} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <select name='category' className='input input-bordered' defaultValue={toy.subcategory}>
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
                        <textarea name='description' defaultValue={toy.description} className='input input-bordered h-36 resize-none'></textarea>
                    </div>
                </div>
                <div className="form-control mt-6">
                    <button className="my-btn-primary">Update Toy</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;
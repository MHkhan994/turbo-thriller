import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet';

const AddToy = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const { user } = useContext(AuthContext)

    const handleAddToy = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const subcategory = form.category.value;
        const description = form.description.value;

        const seller_email = user.email;
        const seller_name = user?.displayName;
        const rating = (Math.random() + 4).toFixed(1);

        if (quantity < 0 || price < 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "quantity can't be negative",
            })
            return
        }

        const toy = {
            picture,
            name,
            price: `$${price}`,
            rating,
            category: '',
            subcategory,
            quantity,
            seller_name,
            seller_email,
            description
        }

        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-middle',
                        icon: 'success',
                        title: 'Toy added successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })
    }

    return (
        <div className='min-h-screen my-container' data-aos='fade-down' data-aos-duration='800'>
            <Helmet>
                <title>Turbo Thriller - Add a Toy </title>
            </Helmet>
            <form onSubmit={handleAddToy} className="w-full p-6 pt-10 rounded-lg">
                <div className=' grid lg:grid-cols-2 gap-3'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input required name='name' type="text" placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Picture</span>
                        </label>
                        <input required name='picture' type="text" placeholder="Toy Photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input required name='price' type="number" placeholder="Toy price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input required name='quantity' type="number" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <select required name='category' className='input input-bordered'>
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

export default AddToy;
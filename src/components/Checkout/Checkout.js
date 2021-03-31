import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
    const { bookId } = useParams();

    const [book, setBook] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/book/${bookId}`)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    const { name, authorName, price, bookCover } = book

    return (
        <div className="container">
            <div className="my-2 pl-5 checkout-header">
                <h2 className="ml-5 px-5">Checkout</h2>
            </div>
            <hr />
            <div className="checkout-body">
                <div className="mb-4 d-flex justify-content-center align-items-center">
                    <img src={bookCover} className="checkout-img" alt="" />
                    <div className="pl-4">
                        <h2 className="mt-2 color-custom">{name}</h2>
                        <p className="card-book-writer">{authorName}</p>
                    </div>
                </div>
                <div className="checkout-card p-2 m-auto w-75">
                    <table className="table border-0">
                        <thead>
                            <tr>
                                <th className="border-top-0" scope="col">Description</th>
                                <th className="text-center border-top-0" scope="col">Quantity</th>
                                <th className="text-right border-top-0" scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{name}</td>
                                <td className="text-center">1</td>
                                <td className="text-right">${price}</td>
                            </tr>
                            <tr>
                                <td colSpan="2">Total</td>
                                <td className="text-right">${price}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="w-100 text-right">
                        <Link to="/orders" className="btn btn-custom">Order Now</Link>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Checkout;
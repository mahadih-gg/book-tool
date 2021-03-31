import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Books = ({ book }) => {
    const { name, authorName, price, bookCover } = book
    return (
        <div className="col-md-4 col-sm-10 mb-4">

            <div className="card card-custom">
                <div className="card-image text-center">
                    <img src={bookCover} className="card-img-top p-4" alt="" />
                </div>
                <div className="card-body">
                    <h3 className="card-title mb-0 card-book-name">{name}</h3>
                    <p className="card-text card-book-writer">{authorName}</p>
                    <div className="d-flex">
                        <h2 className="card-price">${price}</h2>
                        <div className="ml-auto">
                            <Link to="/checkout" className="btn btn-custom">Buy Now </Link>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Books;
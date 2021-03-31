import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css'

const Books = ({ book }) => {
    const { name, writer, imgUrl, price } = book
    return (
        <div className="col-3 mb-4">

            <div className="card card-custom">
                <div className="card-image text-center">
                    <img src={require(`../../images/${imgUrl}`).default} className="card-img-top p-4" alt="" />
                </div>
                <div className="card-body">
                    <h3 className="card-title mb-0 card-book-name">{name}</h3>
                    <p className="card-text card-book-writer">{writer}</p>
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
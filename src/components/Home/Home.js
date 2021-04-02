import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Home.css';
import loader from './../../images/main-loading.gif'

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://quiet-waters-82203.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div className="container">

            {/* Search Bar */}
            <div className="input-group w-50 m-auto">
                <input type="text" className="form-control" placeholder="Search Book" />
                <div className="input-group-append">
                    <button className="btn btn-custom" type="button">Search</button>
                </div>
            </div>

            <div className="row mt-5">
                {
                    books.length === 0 && <img src={loader} alt="" className="loading m-auto" />
                }
                {
                    books.map(book => <Books book={book} key={book._id}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;
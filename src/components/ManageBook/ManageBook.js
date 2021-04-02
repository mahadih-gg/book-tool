import React, { useEffect, useState } from 'react';
import './ManageBook.css'
import editIco from '../../images/edit-ico.png'
import deleteIco from '../../images/delete-ico.png'

const ManageBook = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://quiet-waters-82203.herokuapp.com/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [books])

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/deleteBook/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    const remainBooks = books.filter(book => book._id !== id);
                    setBooks(remainBooks);
                }
            })

    }

    return (
        <div className="w-100 p-3 mb-3 manage-book-container">
            <div className="manage-book-header mb-3 p-3">
                <div className="row">
                    <div className="col-4 d-flex align-items-center ">
                        <p className="my-auto">Book Name</p>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <p className="my-auto">Author Name</p>
                    </div>
                    <div className="col-1 d-flex align-items-center">
                        <p className="my-auto">Price</p>
                    </div>
                    <div className="col-2 ml-auto d-flex align-items-center">
                        <p className="my-auto">Action</p>
                    </div>
                </div>
            </div>
            <div className="manage-book-body">
                {
                    books.map(book => {
                        return (
                            <div className="row p-3 single-book">
                                <div className="col-4 d-flex align-items-center ">
                                    <p className="my-auto">{book.name}</p>
                                </div>
                                <div className="col-4 d-flex align-items-center">
                                    <p className="my-auto">{book.authorName}</p>
                                </div>
                                <div className="col-1 d-flex align-items-center">
                                    <p className="my-auto">${book.price}</p>
                                </div>
                                <div className="col-2 ml-auto d-flex align-items-center">
                                    <button className="mr-2 btn-action">
                                        <img src={editIco} className="my-auto" width="30px" alt="" />
                                    </button>
                                    <button className="btn-action" onClick={() => handleDelete(book._id)}>
                                        <img src={deleteIco} className="my-auto" width="30px" alt="" />
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default ManageBook;
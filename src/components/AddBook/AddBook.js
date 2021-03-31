import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css'

const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {

        const bookData = {
            name: data.name,
            authorName: data.authorName,
            price: data.price,
            bookCover: imageUrl
        }

        fetch('https://quiet-waters-82203.herokuapp.com/addBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData)
        })
            .then(res => console.log('response', res))

    };
    const handleUploadImages = (e) => {
        const imageData = new FormData();
        imageData.set('key', '3f363e85e94ff32374398424e5766ed5')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => setImageUrl(res.data.data.display_url))
            .catch(err => console.log(err))
    }
    console.log(imageUrl);


    return (
        <div className="container">
            <div className="w-100 p-5  addBook-header">
                <h2>Add Book</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="row mt-5 addBook-form p-5">
                <div className="form-group col-md-5">
                    <label htmlFor="bookName">Book Name</label>
                    <input type="text" name="name" className="form-control" id="bookName" ref={register({ required: true })} placeholder="Enter Book Name" />
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="authorName">Author Name</label>
                    <input type="text" name="authorName" className="form-control" id="authorName" ref={register({ required: true })} placeholder="Author Name" />
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="addPrice">Add Price</label>
                    <input type="text" name="price" className="form-control" id="addPrice" ref={register({ required: true })} placeholder="Enter Price" />
                </div>
                <div className="form-group col-md-5">
                    <label htmlFor="addBookCover">Add Book Cover</label>
                    <input type="file" name="bookCover" id="addBookCover" onChange={handleUploadImages} />
                </div>
                <button type="submit" className="btn btn-custom col-md-3 ml-auto">Submit</button>
            </form>
        </div>
    );
};

export default AddBook;
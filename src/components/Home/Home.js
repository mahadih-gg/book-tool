import React from 'react';
import Books from '../Books/Books';
import './Home.css'

const fakeData = [
    {
        "id": 1,
        "name": "Valina",
        "writer": "Cheng",
        "imgUrl": "image 19.png",
        "price": 257
    },
    {
        "id": 2,
        "name": "Lisha",
        "writer": "Archard",
        "imgUrl": "image 20.png",
        "price": 253
    },
    {
        "id": 3,
        "name": "Fannie",
        "writer": "Tidball",
        "imgUrl": "image 21.png",
        "price": 298
    },
    {
        "id": 4,
        "name": "Lilli",
        "writer": "Ricci",
        "imgUrl": "image 22.png",
        "price": 289
    },
    {
        "id": 5,
        "name": "Thebault",
        "writer": "Haddleton",
        "imgUrl": "image 23.png",
        "price": 280
    },
    {
        "id": 6,
        "name": "Devina",
        "writer": "Tutton",
        "imgUrl": "image 21.png",
        "price": 203
    },
    {
        "id": 7,
        "name": "Meridith",
        "writer": "Luxmoore",
        "imgUrl": "image 25.png",
        "price": 231
    },
    {
        "id": 8,
        "name": "Delphinia",
        "writer": "Gilogly",
        "imgUrl": "image 22.png",
        "price": 224
    },
    {
        "id": 9,
        "name": "Chicky",
        "writer": "Henzley",
        "imgUrl": "image 20.png",
        "price": 280
    },
    {
        "id": 10,
        "name": "Koren",
        "writer": "Lowing",
        "imgUrl": "image 19.png",
        "price": 259
    },
    {
        "id": 11,
        "name": "Killy",
        "writer": "Mardy",
        "imgUrl": "image 29.png",
        "price": 272
    },
    {
        "id": 12,
        "name": "Averil",
        "writer": "Pocke",
        "imgUrl": "image 30.png",
        "price": 237
    },
    {
        "id": 13,
        "name": "Bili",
        "writer": "Sone",
        "imgUrl": "image 31.png",
        "price": 294
    },
    {
        "id": 14,
        "name": "Levin",
        "writer": "Swigger",
        "imgUrl": "image 19.png",
        "price": 281
    },
    {
        "id": 15,
        "name": "Hayes",
        "writer": "Oxtiby",
        "imgUrl": "image 20.png",
        "price": 226
    },
    {
        "id": 16,
        "name": "Theadora",
        "writer": "Tatterton",
        "imgUrl": "image 21.png",
        "price": 275
    },
    {
        "id": 17,
        "name": "Nerissa",
        "writer": "Lipp",
        "imgUrl": "image 22.png",
        "price": 245
    },
    {
        "id": 18,
        "name": "Hogan",
        "writer": "Carlos",
        "imgUrl": "image 23.png",
        "price": 255
    }
]

const Home = () => {
    return (
        <div className="container">

            <div class="input-group w-50 m-auto">
                <input type="text" class="form-control" placeholder="Search Book" />
                <div class="input-group-append">
                    <button class="btn btn-custom" type="button">Search</button>
                </div>
            </div>


            <div className="row mt-5">
                {
                    fakeData.map(book => <Books book={book} key={book.id}></Books>)
                }
            </div>
        </div>
    );
};

export default Home;
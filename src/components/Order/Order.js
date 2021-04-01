import React, { useContext, useEffect, useState } from 'react';
import './Order.css'
import image from '../../images/image 22.png'
import { UserContext } from '../../App';

const Order = () => {
    const [user, setUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            method: "GET",
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <div className="container">
            <div className="text-center">
                <h1> <span className="color-custom">{user.displayName},</span> your ordered books</h1>
            </div>
            <hr />
            {
                orders.map(order => {
                    return (
                        <div className="row mt-2 d-flex justify-content-center">
                            <div className="col-10 mb-3 p-3 order-card">
                                <div className="row w-100">
                                    <div className="col-2 ml-3">
                                        <img src={order.bookCover} className="ml-3" alt="" />
                                    </div>
                                    <div className="col-6 d-flex align-items-center">
                                        <div>
                                            <h3>{order.name}</h3>
                                            <p>{order.authorName}</p>
                                        </div>
                                    </div>
                                    <div className="col-3 ml-auto d-flex justify-content-end align-items-center">
                                        <h5 className="">Quantity: 1</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Order;
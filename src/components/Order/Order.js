import React, { useContext, useEffect, useState } from 'react';
import './Order.css'
import { UserContext } from '../../App';
import loader from './../../images/main-loading.gif'


const Order = () => {
    const [user, setUser] = useContext(UserContext);

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://quiet-waters-82203.herokuapp.com/orders?email=${user.email}`, {
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
            <div className="w-100 d-flex justify-content-center align-items-center">
                {
                    orders.length === 0 && <img src={loader} alt="" className="loading" />
                }
            </div>
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
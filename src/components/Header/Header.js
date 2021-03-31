import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand pl-5" href="#">
                        <img src={logo} alt="" height="70px" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto px-5">
                            <li className="nav-item mr-5">
                                <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/orders" className="nav-link" href="#">Orders</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/" className="nav-link" href="#">About</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
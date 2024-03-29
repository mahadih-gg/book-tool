import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    const [user, setUser] = useContext(UserContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand pl-5">
                        <img src={logo} alt="" height="70px" className="d-inline-block align-text-top" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto px-5">
                            <li className="nav-item mr-5">
                                <Link to="/home" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item mr-5">
                                <Link to="/dashboard/manageBooks" className="nav-link">Dashboard</Link>
                            </li>
                            {
                                user.email ? <li className="nav-item mr-5">
                                    <Link to="/" className="nav-link" onClick={() => setUser({})}> <button className="btn btn-danger">Log Out</button> </Link>
                                </li>
                                    : <li className="nav-item mr-5">
                                        <Link to="/login" className="nav-link"> <button className="btn btn-custom">Log In</button> </Link>
                                    </li>
                            }
                            {
                                user.email && <li className="nav-item profile mr-5">
                                    <img src={user.photoURL} className="" alt="" />
                                </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
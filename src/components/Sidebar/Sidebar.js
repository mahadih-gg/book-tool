import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div class="sidebar-custom" id="sidebar-wrapper">
            <div class="list-group list-group-flush pt-5">
                <Link to="/dashboard/manageBooks" class="list-group-item list-group-item-action text-center sidebar-link">Manage All Books</Link>

                <Link to="/dashboard/addBook" class="list-group-item list-group-item-action text-center sidebar-link">Add Book</Link>

                <Link to="/dashboard/editBook" class="list-group-item list-group-item-action text-center sidebar-link">Edit Book</Link>
            </div>
        </div>
    );
};

export default Sidebar;
import React from 'react';
import './Dashboard.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import EditBook from '../EditBook/EditBook';


const Dashboard = () => {
    return (
        <Router>
            <div className="row">
                <Switch>
                    <div className="col-3">
                        <Sidebar></Sidebar>
                    </div>
                </Switch>

                <Switch>
                    <div className="col-8">
                        <Route path="/dashboard/manageBooks">
                            <ManageBook></ManageBook>
                        </Route>
                        <PrivateRoute path="/dashboard/addBook">
                            <AddBook />
                        </PrivateRoute>
                        <Route path="/dashboard/editBook">
                            <EditBook />
                        </Route>
                    </div>
                </Switch>

            </div>
        </Router>
    );
};

export default Dashboard;
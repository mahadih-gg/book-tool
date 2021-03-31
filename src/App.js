import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import AddBook from "./components/AddBook/AddBook";
import Checkout from "./components/Checkout/Checkout";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext({})

function App() {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Switch>
          <Header></Header>
        </Switch>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/book/:bookId">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/addBook">
            <AddBook />
          </PrivateRoute>
          <PrivateRoute path="/orders">
            <Order />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

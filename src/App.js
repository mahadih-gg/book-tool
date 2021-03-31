import React from "react";
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

function App() {
  return (
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
        <Route path="/addBook">
          <AddBook />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

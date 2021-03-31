import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";

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
        <Route path="/about">

        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

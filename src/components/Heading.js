import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../css/App.css';

//import CallBacks from '../containers/CallBacks';
//import Closures from '../containers/Closures';



class Heading extends Component {
  render() {
    return (

  <Route>	 	
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
  <Link className="navbar-brand" to="/">ES6 Practice</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/call-backs">Call Backs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/closures">Closures</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/arrow-functions">Arrow Functions</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/promises">Promises</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/props">Props</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/state">State</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/playground">PlayGround</Link>
      </li>
    </ul>
  </div>
</nav>

  </Route>
 
    	 
    );
  }
}

export default Heading;
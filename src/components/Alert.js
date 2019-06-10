import React, { Component } from 'react';
import '../css/App.css';
import TitlePage from '../components/TitlePage';
import { Link } from 'react-router-dom';




 

class Alert extends Component {
  render() {

    function handleClick(e) {
    //e.prevetDefault();
    console.log('The link was clicked.');
    alert('Stop Punching Me!')
    return <h3>Stop Punching Me</h3>

  }
 
    return (
    	
      <div className="">
       <h1>Alert Box</h1> 
        <div className="container">
          <a class="punch" onClick={handleClick}>Hit</a>
        </div>
        
      </div>

    	 
    );

  }
}

export default Alert;
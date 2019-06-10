import React, { Component } from 'react';
import '../css/App.css';
import TitlePage from '../components/TitlePage';
import Clock from '../components/Clock';
import SalesTax from '../components/SalesTax';




class State extends Component {
  render() {
    return (
    	<div>
    		<TitlePage name="State"/>

    	<div className="container">
    		<Clock date={new Date()} />
        <hr/>
        <SalesTax />
        </div>
  		</div>
    	 
    );
  }
}

export default State;
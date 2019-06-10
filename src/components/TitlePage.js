import React, { Component } from 'react';
import '../css/App.css';
import Heading from '../components/Heading';




class TitlePage extends Component {


  render() {



    return (
    	<div>
    		<Heading/>
    			<div className="container title">
    				<h1>{ this.props.name }</h1>
  				</div>
      </div>
    	 
    );
    
  }

}

export default TitlePage;
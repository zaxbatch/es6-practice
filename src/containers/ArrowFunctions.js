import React, { Component } from 'react';
import '../css/App.css';
import TitlePage from '../components/TitlePage';




class ArrowFunctions extends Component {


  render() {

    const TagLine = (props) => <h3>Arrow functions are { props.adj }</h3>;
    const User = () => <h1>User</h1>


    return (
    	<div>
	      <div>
	        <TitlePage name="Arrow Functions" />
	      </div>
	      
	      <div className="container">
	      	<TagLine adj="Cool!" />
	      	<TagLine adj="Neat!" />
	      	<TagLine adj="Convenient!" />
	      	<TagLine adj="Easy?" />
	      	<hr />
	      </div>

	      <div className="container">
	      	<User />
	      </div>

	</div>
	    	 
    );
    
  }

}

export default ArrowFunctions;
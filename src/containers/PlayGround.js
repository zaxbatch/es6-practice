import React, { Component } from 'react';
import '../css/App.css';
import TitlePage from '../components/TitlePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Alert from '../components/Alert';
import SlideShow from '../components/SlideShow';
import LittleBox from '../components/LittleBox';
import AddOne from '../components/AddOne';
import HappySad from '../components/HappySad';

class PlayGround extends Component {
  render() {


 
    return (
    	
      <div className="">
        
        <div> 
      		<TitlePage name="PlayGround"/>

    		</div>

        <div className="container">
          <Alert />
          <br />
          <hr />

        </div>
        <div className="container">
          <Router>
          
          <div>
              <h1>SlideShow</h1>
               <SlideShow />
            <hr />
             

          </div>
          
        </Router>
        <LittleBox />
        <hr />
        <AddOne />
        <hr />
        <HappySad />
        </div>


        
      </div>

    	 
    );

  }
}

export default PlayGround;
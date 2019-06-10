import React, { Component } from 'react';
import '../css/App.css';
import TitlePage from '../components/TitlePage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Alert from '../components/Alert';
import Pic01 from '../img/01.jpg';
import Pic02 from '../img/02.jpg';
import Pic03 from '../img/03.jpg';



const Sample = function sample(props) {
  return <div>
            <img className="pic" src={ Pic01 } />
            <br />
            <Link to="/sample01">One --> Next</Link>
          </div>
}

const Sample01 = function sample(props) {
  return <div>
            <img className="pic" src={ Pic02 } />
            <br />
            <Link to="/sample02">Two --> Next</Link>
          </div>
}

const Sample02 = function sample(props) {
  return <div>
            <img className="pic" src={ Pic03 } />
            <br />
            <Link to="/sample">Three --> Start Over</Link>
          </div>
}

const Start = function start() {
  return <div>
            <Link to="/sample">Start</Link>
          </div>

}


 

class SlideShow extends Component {
  render() {

 
    return (
    	
      <div className="">
        
 
        <div className="container">
          <Router>
          
        <div>
             <Start />
             <Route path="/sample" render={()=><Sample />} />
             <Route path="/sample01" render={()=><Sample01 />} />
             <Route path="/sample02" render={()=><Sample02 />} />
          

        </div>
        
        </Router>
        </div>

        
      </div>

    	 
    );

  }
}

export default SlideShow;
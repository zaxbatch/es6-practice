import React, { Component } from 'react';
import '../css/App.css';
import Home from './Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CallBacks from './CallBacks';
import Closures from './Closures';
import ArrowFunctions from './ArrowFunctions';
import Promises from './Promises';
import Props from './Props';
import State from './State';
import PlayGround from './PlayGround';




class App extends Component {
  render() {
    return (
      <Router>
          
      	<div>
             <Route exact path="/"  render={()=><Home />} />
             <Route path="/call-backs" render={()=><CallBacks />} />
             <Route path="/closures" render={()=><Closures />} />
             <Route path="/arrow-functions" render={()=><ArrowFunctions />} />
             <Route path="/promises" render={()=><Promises />} />
             <Route path="/props" render={()=><Props/>} />
             <Route path="/state" render={()=><State/>} />
             <Route path="/playground" render={()=><PlayGround/>} />
             
        </div>
        
        </Router>
    );
  }
}

export default App;

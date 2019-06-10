import React from 'react';

class LittleBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true,
    			  rem: '10rem'
    			};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick=()=> {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    if (this.state.isToggleOn != true) {
    	this.setState(state => ({
      	rem: '10rem'
    }));
    }else{
    	this.setState(state => ({
     	rem: '40rem'
    }));
    }
  }

  render() {
    return (
      <div className={this.state.isToggleOn ? 'blue-box' : 'orange-box'} onClick={this.handleClick}>
        <h1>{this.state.rem}</h1>
      </div>
    );
  }
}
export default LittleBox;
import React, { Component } from 'react';

class StateExercise01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',
                  tax: ''
                };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    handleChange2(event) {
    this.setState({tax: event.target.value});
  }






  render() {
    return (
      <div className="container">
        <h2>Subtotal</h2>
        <input type="number" value={this.state.value} onChange={this.handleChange} />
        <h2>Tax Percentage</h2>
        <input type="number" value={this.state.tax} onChange={this.handleChange2} />
        <h2>Total</h2>
        <h3>${ (this.state.value * (1+ (this.state.tax * .01))).toFixed(2) }</h3>
        
      </div>
    );
  }
}

export default StateExercise01;

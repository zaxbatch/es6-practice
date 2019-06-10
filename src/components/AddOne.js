import React from 'react';
import props from 'react';
class AddOne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {click: 0
                };

    
  }  

  ButtonClick=(event)=> {
    this.setState({click: this.state.click + 1});
        if((this.state.click + 1) % 10  == 0 && this.state.click > 0) {
      alert(this.state.click + 1 + ' is divisible by 10');
    }

  }

  DisplayState() {

  }

  render() {
    return(
      <div>
        <button onClick={this.ButtonClick}>Click</button>
        <br />
        <div>
          <h1>1 + {this.state.click} = {1 + this.state.click}</h1>
        </div>
      </div>
    );
  }
}
export default AddOne;
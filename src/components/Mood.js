import React from 'react';
import SadGreeting from './SadGreeting';
import HappyGreeting from './HappyGreeting';
import HappyButton from './HappyButton';
import SadButton from './SadButton';

class Mood extends React.Component {
	constructor(props) {
    super(props);
    //this.handleHappyClick = this.handleLoginClick.bind(this);
    //this.handleSadtClick = this.handleLogoutClick.bind(this);
    this.state = {isHappy: true};
  }

  handleSadClick=()=> {
  	this.setState({isHappy:false});
  }

  handleHappyClick=()=> {
  	this.setState({isHappy:true});

  }
	render() {
		const isHappy = this.state.isHappy;
				
		if(isHappy){
			return(
				<div>
					<HappyGreeting />
					<SadButton onClick={this.handleSadClick} />
				</div>
			);
		}
		else {
			return(
			 <div>
			 <SadGreeting />
			 <HappyButton onClick={this.handleHappyClick} />
			 </div>
			 );
		}
			

	}
		
	
}
export default Mood;

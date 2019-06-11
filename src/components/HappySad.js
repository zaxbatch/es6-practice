import React from 'react';
// import HappyButton from './HappyButton';
// import SadButton from './SadButton';
// import HappyGreeting from './HappyGreeting';
// import SadGreeting from './SadGreeting';
import Mood from './Mood';
//import MoodSelect from '/MoodSelect'

class HappySad extends React.Component {

	render() {
		return(
			<div>
				<Mood isHappy={true} />
			</div>
		);
	}
}

export default HappySad;
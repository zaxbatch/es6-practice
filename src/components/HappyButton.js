import React from 'react';

function HappyButton(props) {

		
		return(
			<div>
				<button onClick={props.onClick}>Happy</button>
			</div>
		);
	
}

export default HappyButton;
import React from 'react';

function SadButton(props) {

		return(
			<div>
				<button onClick={props.onClick}>Sad</button>
			</div>
		);

}

export default SadButton;
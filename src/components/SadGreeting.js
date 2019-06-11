import React from 'react';
import SadFace from '../img/sad.jpeg'

function SadGreeting(props) {
		return (
			<div>
				<h2>You are Sad</h2>
				<img src={SadFace} alt="sad face" />

			</div>
		);
	}
export default SadGreeting;

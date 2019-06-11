import React from 'react';
import HappyFace from '../img/happy.jpg'


function HappyGreeting(props) {
		return (
			<div>
				<h2>You are Happy</h2>
				<img src={HappyFace} alt="happy face" />
			</div>
		);
	}
export default HappyGreeting;


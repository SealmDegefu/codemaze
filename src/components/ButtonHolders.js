import { Button } from './Button';
import '../App.css';
import React from 'react';
import './ButtonHolders.css';
import { GiPlayButton } from 'react-icons/gi'

function ButtonHolders() {
	return (
		<div className="buttonHolder-container">
			<video src="/video/vid.mp4" autoPlay loop muted />
			<center>
			<Button className='btns' buttonStyle='btn--outline'
			buttonSize='btn--large'>Play A Game </Button>
			<Button className='btns' buttonStyle='btn--primary'
			buttonSize='btn--large'>Watch Testimonies <GiPlayButton /> </Button>
			</center>
		</div>
	)
}

export default ButtonHolders

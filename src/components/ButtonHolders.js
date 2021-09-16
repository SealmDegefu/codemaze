import { Button } from './Button';
import '../App.css';
import React from 'react';
import './ButtonHolders.css';
import { GiPlayButton } from 'react-icons/gi';
import { Link } from 'react-router-dom';

function ButtonHolders() {
	return (
		<div className="buttonHolder-container">
			<video src="/video/vid.mp4" autoPlay loop muted />
			<center>
			<Link to="/game">
			<Button className='btns' buttonStyle='btn--outline'
			buttonSize='btn--large'>Play A Game </Button>
			</Link>
			<Button className='btns' buttonStyle='btn--primary'
			buttonSize='btn--large'>Watch Testimonies <GiPlayButton /> </Button>
			</center>
		</div>
	)
}

export default ButtonHolders

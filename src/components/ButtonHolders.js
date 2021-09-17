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
			<Link to="/learning">
			<Button className='btns' buttonStyle='btn--primary'
			buttonSize='btn--large'>Explore Learning Materials <GiPlayButton /> </Button>
			</Link>
			</center>
		</div>
	)
}

export default ButtonHolders

import React, {useState, useEffect} from 'react'
import {Link } from 'react-router-dom';
import { BsPlug } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdCancel } from 'react-icons/md';
import { Button } from './Button';
import './Navbar.css';


function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () =>setClick(!click);
	const closeMobileMenu = () => setClick(false);
	
const showButton = () => {
if(window.innerWidth <= 960) {
	setButton(false);
}else {
	setButton(true);
}
};

useEffect(() => {
	showButton();
}, []);

window.addEventListener('resize', showButton);
	return (
		<>
		<nav className="navbar">
		<div className="navbar-container">
		<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
			PLUGGED
			<BsPlug />
		</Link>	
		<div className='menu-icon' onClick={handleClick}>
			{ click ? <MdCancel />: <GiHamburgerMenu /> }
		</div>
		<ul className={click ? 'nav-menu active' : 'nav-menu'}>
		<li className="nav-item">
			<Link 
			to="/" 
			className='nav-links' 
			onClick={closeMobileMenu}>
				Home
			</Link>
		</li>
		<li className="nav-item">
			<Link 
			to="/stories" 
			className='nav-links' 
			onClick={closeMobileMenu}>
				Learning Materials
			</Link>
		</li>
		<li className="nav-item">
			<Link 
			to="/mentor" 
			className='nav-links' 
			onClick={closeMobileMenu}>
				Find a Mentor
			</Link>
		</li>
		<li className="nav-item">
			<Link 
			to="/sign-up" 
			className='nav-links-mobile' 
			onClick={closeMobileMenu}>
				Sign Up
			</Link>
		</li>
		</ul>
		{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
		</div>
		</nav>
		</>
	)
}

export default Navbar

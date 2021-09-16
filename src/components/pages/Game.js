import React, { useEffect } from 'react';
import { MdAccessibility } from 'react-icons/md';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Icon } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

function Game() {

	// const downHandler = () =>{
	// 	if()
	// }
	// useEffect(() => {
	// 	window.addEventListener("keydown", downHandler);
	// 	window.addEventListener("keyup", upHandler);
	// 	// Remove event listeners on cleanup
	// 	return () => {
	// 	  window.removeEventListener("keydown", downHandler);
	// 	  window.removeEventListener("keyup", upHandler);
	// 	};
	//   }, []);

	// 	 const handleAnswerChange = (event) => {
	// 		if(document.addEventListener('keydown', )){
	// 			alert('the sky is your limit')
	// 	}
	// 		else if (event.key === 'up') {
	// 			alert('The sky is your limit👀')
	// 	}
	// }
	// const handleKeyMovement = (event) => {
		const modifier = 5;
		// const ref = 
		window.addEventListener('keydown', (event) => {
		const  { style } = document.getElementById("token")
		switch (event.key) {
			case 'ArrowUp': style.top = `${parseInt(style.top) - modifier}px`; break;
			case 'ArrowDown': style.top = `${parseInt(style.top) + modifier}px`; break;
			case 'ArrowUp': style.left = `${parseInt(style.left) - modifier}px`; break;
			case 'ArrowUp': style.left = `${parseInt(style.left) + modifier}px`; break;
		}
		});
// }
	
	return (
		
	<div>
	<div className="header-container">
		<div className="timer">
		I am a timer
	    <br />
		<button> Start timer</button>
		</div>
		<div className="trophy">I am a trophy</div>
	</div>
			
		<div className="container">
    		<div className="instructions">
				<h2>Instructions</h2>
				Text about the game!
			
			</div>
	
    		<div className="maze">
		<Box sx={{ flexGrow: 1 }}>
      		<Grid className="grid-size" container columns={6}>
			{/* Row 1 */}
        	<Grid className="maze-background" item xs={5}>
          	{/* <Item> </Item> */}
        	</Grid>
        	<Grid item xs={1}>
          	<Item className="grid-size" id="start">
			  Start
			  <MdAccessibility id="token" size={70}/></Item>
        	</Grid>
			{/* Row 2 */}
			<Grid className="maze-background" item xs={3}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="3">First Challenge</Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="2"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="1"></Item>
        	</Grid>
			{/* Row 3 */}
			<Grid className="maze-background" item xs={1}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="8">Optional</Item>
        	</Grid>
			<Grid className="maze-background" item xs={1}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="4"></Item>
        	</Grid>
			<Grid className="maze-background" item xs={2}>
          	{/* <Item> </Item> */}
        	</Grid>
			{/* Row 4 */}
			<Grid className="maze-background" item xs={1}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="7"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="6">Second Challenge</Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="5"></Item>
        	</Grid>
			<Grid className="maze-background" item xs={2}>
          	{/* <Item> </Item> */}
        	</Grid>
			{/* Row 5 */}
			<Grid className="maze-background" item xs={2}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="9"></Item>
        	</Grid>
			<Grid className="maze-background" item xs={3}>
          	{/* <Item> </Item> */}
        	</Grid>
			{/* Row 6 */}
			<Grid className="maze-background" item xs={2}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="10">Third Challenge</Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="11"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="12"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="13">Optional</Item>
        	</Grid>
			{/* Row 7 */}
			<Grid className="maze-background" item xs={2}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="14"></Item>
        	</Grid>
			<Grid className="maze-background" item xs={3}>
          	{/* <Item> </Item> */}
        	</Grid>
			{/* Row 8 */}
			<Grid item xs={1}>
          	<Item className="grid-size" id="17"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="16"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size" id="15">Last Challenge</Item>
        	</Grid>
			<Grid className="maze-background" item xs={3}>
          	{/* <Item> </Item> */}
        	</Grid>
			{/* Row 9 */}
			<Grid item xs={1}>
          	<Item className="grid-size" id="end">End</Item>
        	</Grid>
			<Grid className="maze-background" item xs={5}>
          	{/* <Item> </Item> */}
        	</Grid>


      		</Grid>
    	</Box>
		
			</div>	
		</div>
	</div>
	)
}

export default Game

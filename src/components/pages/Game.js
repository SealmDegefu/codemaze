import React from 'react';
import { MdAccessibility } from 'react-icons/md';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
  }));

function Game() {

	// const modifier = 5;
	// window.addEventListener(KeyboardEvent)
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
    		<div className="instructions"> Content A</div>
	
    		<div className="maze">
		<Box sx={{ flexGrow: 1 }}>
      		<Grid className="grid-size" container columns={6}>
			{/* Row 1 */}
        	<Grid className="maze-background" item xs={5}>
          	{/* <Item> </Item> */}
        	</Grid>
        	<Grid item xs={1}>
          	<Item className="grid-size"> <MdAccessibility size={70}/></Item>
        	</Grid>
				{/* Row 2 */}
			<Grid className="maze-background" item xs={3}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size"></Item>
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size"></Item>
        	</Grid>
			{/* Row 3 */}
			<Grid className="maze-background" item xs={1}>
          	{/* <Item> </Item> */}
        	</Grid>
			<Grid item xs={1}>
          	<Item className="grid-size"></Item>
        	</Grid>
			<Grid item xs={1}>
          	{/* <Item className="grid-size"></Item> */}
        	</Grid>
			<Grid item xs={1}>
          	{/* <Item className="grid-size"></Item> */}
        	</Grid>
      		</Grid>
    	</Box>
		
			</div>	
		</div>
	</div>
	)
}

export default Game

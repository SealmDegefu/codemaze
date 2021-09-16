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
	return (
	<div>
		<h1>I am a timer</h1>
		<h1>I am a trophy</h1>
			
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
      		</Grid>
    	</Box>
		
			</div>	
		</div>
	</div>
	)
}

export default Game

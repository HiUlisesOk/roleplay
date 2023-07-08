import React from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { FollowButtonStyles } from '../../css/ButtonsStyles';

const FollowButton = () => {
	return (
		<div>
			<Button variant="outlined" style={FollowButtonStyles} color="secondary" endIcon={<AddIcon />}>
				Follow
			</Button>
		</div>
	)
}

export default FollowButton
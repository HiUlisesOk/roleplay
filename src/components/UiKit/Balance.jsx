import React from 'react'
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { ProfileStyles } from '../../css/ProfileStyles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

const Balance = () => {
	return (
		<Box sx={ProfileStyles.moneyBadge}>
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-around'
			}}>
				<Box sx={ProfileStyles.moneyIcon}></Box>
				<Box><Typography style={ProfileStyles.moneyBadgeText} variant="Quicksand14px" color="text.primary">4668</Typography></Box>
			</Box>

			<Box id="goToBalance" sx={{
				ml: 0.5
			}}>
				<Link style={{ display: 'flex', AlignContent: 'center' }} to="/feed">
					<Typography style={{
						...ProfileStyles.moneyBadgeText, display: 'flex',
						alignItems: 'center',
						alignContent: 'center',
						justifyContent: 'center',
					}} variant="Quicksand14px" color="text.primary">Your Balance <ArrowForwardIosIcon sx={{ height: '1vw' }} fontSize="small" /></Typography>
				</Link>
			</Box>
		</Box>
	)
}

export default Balance
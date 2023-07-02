import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import banner from '../img/DreamShaper_v6_A_vibrant_4K_landscape_of_a_fantasy_romance_wor_0.jpg';
import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { getUserById } from '../redux/actions/userActions'
import { getUserByIdSelector } from '../redux/selector/userSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useStyles = {
	container: {
		padding: 0,
		margin: 0,
		width: '100vw',
		maxWidth: '100vw', // Added to occupy the full viewport width
		height: '100vh', // Added to occupy the full viewport height
		display: 'flex', // Added to enable centering
		flexDirection: 'column', // Added to center content vertically

	},
	banner: {
		flex: 1, // Added to fill remaining space
		// backgroundImage: `url(${banner})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		marginBottom: '0',
	},
	section: {
		padding: '3px',
		width: '50vw',
		height: '100%', // Added to occupy full height
		borderRadius: 0, // Added to remove border radius
		display: 'flex', // Added to enable centering
		justifyContent: 'center'
	},
};

function Profile() {
	const dispatch = useDispatch()

	const { id } = useParams();

	const { getUserByIdState } = useSelector(getUserByIdSelector)


	useEffect(() => {
		dispatch(getUserById(id))
	}, [id])


	return (
		<Container style={useStyles.container}>
			<div style={useStyles.banner}></div>
			<Grid container spacing={0} style={{ flex: 1 }}>
				<Grid item xs={6}>
					<Avatar
						alt="Remy Sharp"
						src={getUserByIdState.profilePicture || ""}
						sx={{ width: 150, height: 150, mt: -10, }}
					/>
					<Typography variant="h3" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
					<Box style={useStyles.section}>User Info</Box>
				</Grid>
				<Grid item xs={6}>
					<Box style={useStyles.section}>Character Info</Box>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Profile;







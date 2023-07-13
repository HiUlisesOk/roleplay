import React, { useContext, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Box, Typography } from '@mui/material';

import { getUserById } from '../redux/actions/userActions'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import UserInfo from '../components/Profile/userInfo';
import { ProfileStyles } from '../css/ProfileStyles';


function Profile() {
	const dispatch = useDispatch()
	const theme = useTheme();

	const { id } = useParams();

	useEffect(() => {
		dispatch(getUserById(id))
	}, [id])


	console.log(theme)
	return (<>
		<div style={ProfileStyles.banner}></div>
		<Container style={ProfileStyles.container}>
			<Grid container spacing={0} style={{ flex: 1 }}>
				<Grid item xs={6}>
					<UserInfo />
				</Grid>
				<Grid item xs={6}>
					<Box style={ProfileStyles.section}>Character Info</Box>
				</Grid>
			</Grid>
		</Container>
	</>
	);
}

export default Profile;







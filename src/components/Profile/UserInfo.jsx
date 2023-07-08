import React, { useContext, useState } from 'react';
import { Avatar, Box, Container, Grid, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';
import FollowButton from '../utils/FollowButton';

const UserInfo = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)

	return (
		<div>

			<Grid container spacing={0} style={{ flex: 1 }}>
				<Grid item xs={8}>
					<Box style={ProfileStyles.userPrimarySection}>
						<Avatar
							alt={getUserByIdState.username || "User Profile Picture"}
							src={getUserByIdState.profilePicture || ""}
							sx={ProfileStyles.Avatar}
						/>
						<Box>
							<Typography style={ProfileStyles.userName} variant="h3" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
							<Typography style={ProfileStyles.userName} variant="h6" color="primary.light">@{getUserByIdState.username || ""}</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid item xs={4}>
					<Box style={ProfileStyles.section}>
						<FollowButton />
					</Box>
				</Grid>
			</Grid>


		</div>
	)
}

export default UserInfo
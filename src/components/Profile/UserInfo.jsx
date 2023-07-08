import React, { useContext, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { getUserByIdSelector } from '../../redux/selector/userSelector';

import { ProfileStyles } from '../../css/ProfileStyles';
import { useSelector } from 'react-redux';

const UserInfo = () => {

	const { getUserByIdState } = useSelector(getUserByIdSelector)

	return (
		<div>
			<Box style={ProfileStyles.userPrimarySection}>
				<Avatar
					alt="Remy Sharp"
					src={getUserByIdState.profilePicture || ""}
					sx={ProfileStyles.Avatar}
				/>
				<Box>
					<Typography style={ProfileStyles.userName} variant="h3" color="primary.contrastText">{getUserByIdState.username || ""}</Typography>
					<Typography style={ProfileStyles.userName} variant="h6" color="primary.light">@{getUserByIdState.username || ""}</Typography>
				</Box>
			</Box>
		</div>
	)
}

export default UserInfo
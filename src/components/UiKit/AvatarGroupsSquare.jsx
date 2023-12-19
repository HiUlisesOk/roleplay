import React from 'react'
import BadgeAvatars from './AvatarWithBadge'
import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';
import { ProfileStyles } from '../../css/ProfileStyles';

const AvatarGroupsSquare = () => {
	return (
		<Box id="AvatarGroupsSquare" sx={{ display: 'flex', flexDirection: "row", flexWrap: 'wrap', alignContent: 'stretch', justifyContent: 'center', alignItems: 'center', width: '100%', gap: 0 }}>

			<BadgeAvatars />
			<BadgeAvatars />
			<BadgeAvatars />
			<BadgeAvatars />

		</Box>
	)
}

export default AvatarGroupsSquare
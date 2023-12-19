import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import BasicAccordion from '../UiKit/BasicAccordion'
import GroupedAvatars from '../UiKit/AvatarGroup'
import { userBadgeText } from '../../utils/Dictionary'

const UserBadge = () => {
	const text = userBadgeText[0];
	return (
		<Box id="userBadge" >
			<BasicAccordion textOne={'Liam Vortex Phoenix'} textTwo={"2 hours, 5 minutes ago."}>
				<Box sx={{ width: '100%' }}>
					<Typography variant="Poppins14left" id="userBadgeTitleTopic" sx={{ margin: 0, textAlign: "Left", }} component="div" >{text.userBadgeTitleTopic}</Typography>
					<Typography variant="Quicksand10light" id="userBadgeDescTopic" sx={{ margin: 0 }} component="div" >{text.userBadgeDescTopic}</Typography>
				</Box>
				<GroupedAvatars setSize="2vw" />
			</BasicAccordion>
		</Box>
	)
}

export default UserBadge
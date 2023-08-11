import { Stack, Typography } from '@mui/material'
import React from 'react'
import { ProfileStyles } from '../../css/ProfileStyles'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import PersonIcon from '@mui/icons-material/Person';

const UserStats = () => {
	return (
		<div>
			<Stack
				direction="row"
				justifyContent="flex-start"
				alignItems="center"
				spacing={10}
				style={ProfileStyles.userStatsContainer}
			>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={0}
				>
					<Typography style={ProfileStyles.userStats} variant="h2" color="primary.primary">11798</Typography>
					<Typography style={ProfileStyles.userStatsLabels} variant="body1" color="text.secondary"><StickyNote2Icon style={ProfileStyles.userStatsIcons} />Posts</Typography>
				</Stack>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={0}
				>
					<Typography style={ProfileStyles.userStats} variant="h2" color="text.primary">1571</Typography>
					<Typography style={ProfileStyles.userStatsLabels} variant="body1" color="text.secondary"><MilitaryTechIcon style={ProfileStyles.userStatsIcons} />Battles</Typography>
				</Stack>
				<Stack
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={0}
				>
					<Typography style={ProfileStyles.userStats} variant="h2" color="text.primary">1.5k</Typography>
					<Typography style={ProfileStyles.userStatsLabels} variant="body1" color="text.secondary"><PersonIcon style={ProfileStyles.userStatsIcons} />Followers</Typography>
				</Stack>
			</Stack>
		</div>
	)
}

export default UserStats
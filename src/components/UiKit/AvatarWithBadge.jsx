import * as React from 'react';

import { Avatar, Box, Container, Grid, Stack, Typography } from '@mui/material';

import { ProfileStyles } from '../../css/ProfileStyles';


export default function BadgeAvatars() {
	return (
		<Box sx={{ width: '49%' }}>
			<Box sx={ProfileStyles.AvatarCharacterDashBorder}>
				<Avatar
					alt={"User Profile Picture"}
					src="https://cdn.leonardo.ai/users/6240da8c-3f72-4493-be7f-324177870d97/generations/68088b4a-7315-4056-bc2a-5481c57a846e/Leonardo_Diffusion_XL_A_punk_rock_90s_neon_red_samurai_gracefu_0.jpg?w=512"
					sx={ProfileStyles.AvatarCharacterDash}
				/>
			</Box>
			<Box sx={ProfileStyles.AvatarCharacterDashBadge}>

			</Box>
			<Box sx={{ mt: -3, mb: 2 }}>
				<Typography style={{ ...ProfileStyles.userName, m: 0, fontSize: 12, textAlign: 'center' }} variant="userName" color="primary.contrastText">Liam Vortex Khaler</Typography>
				<Typography style={{ ...ProfileStyles.userName, m: 0, fontSize: 9, textAlign: 'center' }} variant="GuildName" color="secondary.main">Rising Phoenix Legion</Typography>
			</Box>
		</Box >
	);
}
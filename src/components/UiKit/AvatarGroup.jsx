import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { AvatarStyles } from '../../css/FeedStyles'

export default function GroupAvatars({ setSize }) {
	return (
		<AvatarGroup max={10} >
			<Avatar sx={{ width: setSize, height: setSize, ...AvatarStyles }} alt="Remy Sharp" src="https://via.placeholder.com/70x70" />
			<Avatar sx={{ width: setSize, height: setSize, ...AvatarStyles }} alt="Travis Howard" src="https://via.placeholder.com/70x70" />
			<Avatar sx={{ width: setSize, height: setSize, ...AvatarStyles }} alt="Cindy Baker" src="https://via.placeholder.com/70x70" />
			<Avatar sx={{ width: setSize, height: setSize, ...AvatarStyles }} alt="Agnes Walker" src="https://via.placeholder.com/70x70" />
			<Avatar sx={{ width: setSize, height: setSize, ...AvatarStyles }} alt="Agnes Walker" src="https://via.placeholder.com/70x70" />
		</AvatarGroup >
	);
}
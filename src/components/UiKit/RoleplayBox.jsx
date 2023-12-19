import { Box } from '@mui/material'
import React from 'react'
import UserBadge from '../RolePlayBox/UserBadge'

const RoleplayBox = ({ img }) => {
	const { imageBannerStyles } = {
		imageBannerStyles: {
			height: '45vh',
			width: '100%',
			borderRadius: '21px',
			marginLeft: 'auto',
			backgroundSize: 'cover',
			backgroundRepeat: 'no-repeat',
			backgroundPosition: 'center',
			objectFit: 'cover',
			padding: '2vw',
			boxShadow: "4px -270px 109px -04px rgba(0, 0, 0, 0.628) inset",
			display: 'flex',
			alignItems: 'flex-end',
			gap: '1vw',
		}
	}


	return (
		<Box id="banner" sx={{ ...imageBannerStyles, backgroundImage: img }}>
			<UserBadge />
		</Box>
	)
}

export default RoleplayBox
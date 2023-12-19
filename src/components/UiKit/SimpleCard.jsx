import React from 'react'
import BasicSimpleTable from '../UiKit/BasicSimpleTable'
import { Avatar, Box, TableCell, TableRow, Typography } from '@mui/material'
import { cardContainer, imageCardStyles } from '../../css/UiKitStyles'
import { searchCardText as row } from '../../utils/Dictionary'
import GroupAvatars from './AvatarGroup';
import getTimeDifferenceString from '../../utils/TimeAgo'

const AvatarStyles = {
	width: "3vw",
	height: "3vw",
	flexShrink: 0,
	borderRadius: "104px",
	background: "url(<path-to-image>), lightgray 50% / cover no-repeat",
}

const SimpleCard = ({ info }) => {
	console.log(info)
	return (
		<>

			<Box sx={cardContainer}>



				< Box
					key={info?.username}
					sx={{ display: 'flex', flexDirection: 'row', gap: '0.8vw', borderBottom: '0px solid #d6dbde26', padding: '1vh 0', }}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center"
						}}
						align="right"><Avatar src={info?.avatar} sx={AvatarStyles} /></Box>
					<Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '13vw' }} >
						<Typography variant="Poppins16left" component="div" >{info?.author || " - "}</Typography>
						<Typography variant="Poppins10left" color="accent.main" component="div" sx={{ display: "flex" }}>{getTimeDifferenceString(info?.createdAt) || " - "}</Typography>
					</Box>
				</Box>
				<Box id="banner" sx={{ ...imageCardStyles, backgroundImage: `url(/src/img/55.jpg)` }}>
				</Box>
				<Typography variant="Poppins16left" color="accent.main" component="div" sx={{ display: "flex" }}>{info?.title || " - "}</Typography>
				<Box sx={{ m: 'auto', whiteSpace: 'preserve nowrap', }}><Typography sx={{ textOverflow: 'ellipsis', overflow: 'hidden', }} variant="Quicksand14light" component="div" >{row?.preview || " - "}</Typography></Box>
				<GroupAvatars setSize="2vw" />
			</Box >

		</>
	)
}

export default SimpleCard
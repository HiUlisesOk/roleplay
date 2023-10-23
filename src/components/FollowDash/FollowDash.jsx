import React from 'react'
import BasicSimpleTable from '../UiKit/BasicSimpleTable'
import { Avatar, Box, Button, TableCell, TableRow, Typography } from '@mui/material'
import FollowTable from '../UiKit/FollowTable'
import { useTheme } from '@mui/material/styles';

const AvatarStyles = {
	width: "3vw",
	height: "3vw",
	flexShrink: 0,
	borderRadius: "104px",
	background: "url(<path-to-image>), lightgray 50% / cover no-repeat",
}

const FollowDash = ({ rows = [], type, desc, btnTitle, max, title }) => {

	const theme = useTheme();

	const { rowStyles } = {
		rowStyles: {
			background: theme.palette.background.paper,
			borderRadius: 6,
			margin: 1,
			flexDirection: 'row',
			gap: '1vw',
			padding: '2vh',
			width: '100%',
			width: '25vw',
		}
	}

	return (
		<>
			<FollowTable title={title}>
				{rows.map((row, index) => (
					<Box
						key={row.username.trim() + index + "-followDash"}
						sx={{ ...rowStyles, borderBottom: index != rows.lenth ? '1px solid #d6dbde26' : '0px solid transparent', display: (index < max) || !max ? 'flex' : 'none', }}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center"
							}}
							align="right">
							<Avatar id={row.username.trim() + index + "id-followDash"} src={row?.avatar} sx={AvatarStyles} />
						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', width: '10vw', justifyContent: 'center' }} >
							<Typography variant="Poppins10left" color="accent.main" component="div" sx={type ? { display: "flex" } : { display: "none" }}>{row.action || " - "}</Typography>
							<Typography variant="Poppins16left" component="div" >{row.username || " - "}</Typography>
							<Typography variant="Quicksand14light" component="div" sx={desc ? { display: "flex" } : { display: "none" }} >{row.topics || " - "}</Typography>
						</Box>
						<Box sx={{ m: 'auto' }} align="right"><Button variant="contained">{btnTitle || 'Click'}</Button></Box>
					</Box>
				))}
			</FollowTable>
		</>
	)
}

export default FollowDash
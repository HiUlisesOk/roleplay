import React from 'react'
import BasicSimpleTable from '../UiKit/BasicSimpleTable'
import { Avatar, Box, TableCell, TableRow, Typography } from '@mui/material'


const AvatarStyles = {
	width: "3vw",
	height: "3vw",
	flexShrink: 0,
	borderRadius: "104px",
	background: "url(<path-to-image>), lightgray 50% / cover no-repeat",

}
const ActivityTable = ({ rows = [] }) => {
	// console.log(rows)
	return (
		<Box>
			<BasicSimpleTable>
				{rows.map((row, index) => (
					<Box
						key={row.username + index}
						sx={{ display: 'flex', flexDirection: 'row', gap: '2vw', borderBottom: index != rows.lenth ? '1px solid #d6dbde26' : '0px solid transparent', padding: '1vh 0', minWidth: '30vw' }}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center"
							}}
							align="right"><Avatar src={row?.avatar} sx={AvatarStyles} /></Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', minWidth: '13vw' }} >
							<Typography variant="Poppins10left" color="accent.main" component="div" >{row.action || " - "}</Typography>
							<Typography variant="Poppins16left" component="div" >{row.username || " - "}</Typography>
							<Typography variant="Quicksand14light" component="div" >{row.preview || " - "}</Typography>
						</Box>
						<Box sx={{ m: 'auto' }} align="right"><Typography variant="Quicksand14light" component="div" >{row.timeAgo || " - "}</Typography></Box>
					</Box>
				))}
			</BasicSimpleTable>
		</Box>
	)
}

export default ActivityTable
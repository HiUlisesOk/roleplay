import React from 'react'
import { Avatar, Box, Grid, Typography } from '@mui/material'
import {

	statsContainer,
	statSquares,
	statBox,

} from '../../css/DashboardStyles'

const UserStats = ({ stat, title }) => {
	return (
		<>
			<Box sx={statsContainer}>


				<Box sx={statBox}>
					<Box sx={statSquares}>
						<Typography sx={{ fontSize: `${stat}vw !important` }} variant="Poppins16px" component="div">16</Typography>
					</Box>
					<Typography sx={{ fontSize: `${title}vw !important` }} variant="Quicksand14px" component="div">Level</Typography>
				</Box>

				<Box sx={statBox}>
					<Box sx={statSquares}>
						<Typography sx={{ fontSize: `${stat}vw !important` }} variant="Poppins16px" component="div">16</Typography>
					</Box>
					<Typography sx={{ fontSize: `${title}vw !important` }} variant="Quicksand14px" component="div">Topics</Typography>
				</Box>

				<Box sx={statBox}>
					<Box sx={statSquares}>
						<Typography sx={{ fontSize: `${stat}vw !important` }} variant="Poppins16px" component="div">16k</Typography>
					</Box>
					<Typography sx={{ fontSize: `${title}vw !important` }} variant="Quicksand14px" component="div">Experiencia</Typography>
				</Box>

				<Box sx={statBox}>
					<Box sx={statSquares}>
						<Typography sx={{ fontSize: `${stat}vw !important` }} variant="Poppins16px" component="div">16</Typography>
					</Box>
					<Typography sx={{ fontSize: `${title}vw !important` }} variant="Quicksand14px" component="div">Battles</Typography>
				</Box>

			</Box >
		</>
	)
}

export default UserStats
import { Avatar, Box, Grid, Typography } from '@mui/material'
import React from 'react'
import {
	container,
	CharacterPanel,
	AvatarStyles,
	Outline,
	statsContainer,
	statSquares,
	statBox,
	nameBox,
	ranking
} from '../../css/DashboardStyles'



const Dashboard = ({ guild }) => {
	return (
		<Box sx={container}>

			<Box sx={CharacterPanel}>

				<Box sx={nameBox}>
					<Typography variant="Poppins36px" component="div" >{guild || "Rising Phoenix Legion"}</Typography>
				</Box>


				<Box sx={Outline}>
					<Avatar sx={AvatarStyles} />
				</Box>

				<Typography variant="Quicksand24px" component="div">{guild || "Liam Fenix Vortex"}</Typography>

				<Box sx={statsContainer}>


					<Box sx={statBox}>
						<Box sx={statSquares}>
							<Typography variant="Poppins18px" component="div">16</Typography>
						</Box>
						<Typography variant="Quicksand14px" component="div">Level</Typography>
					</Box>

					<Box sx={statBox}>
						<Box sx={statSquares}>
							<Typography variant="Poppins18px" component="div">16</Typography>
						</Box>
						<Typography variant="Quicksand14px" component="div">Topics</Typography>
					</Box>

					<Box sx={statBox}>
						<Box sx={statSquares}>
							<Typography variant="Poppins18px" component="div">16k</Typography>
						</Box>
						<Typography variant="Quicksand14px" component="div">Experiencia</Typography>
					</Box>

					<Box sx={statBox}>
						<Box sx={statSquares}>
							<Typography variant="Poppins18px" component="div">16</Typography>
						</Box>
						<Typography variant="Quicksand14px" component="div">Battles</Typography>
					</Box>

				</Box>

				<Box sx={ranking}>
					<Typography variant="Quicksand14px" color="light.main" component="div" >{guild || "Ranking #1234"}</Typography>
				</Box>

			</Box>

			<Box>

			</Box>

		</Box>
	)
}

export default Dashboard
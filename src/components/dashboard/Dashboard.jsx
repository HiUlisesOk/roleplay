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
	ranking,
	buttonsContainer,
	MenuPanelContainer,
	buttonsContainer_sm
} from '../../css/DashboardStyles'
import SquareButton from '../UiKit/SquareButton'
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import { useState } from 'react';
import ActivityTable from './ActivityTable';

const Dashboard = ({ guild }) => {

	const [showPanel, setShowPanel] = useState(1)
	console.log('showPanel', showPanel)

	const options = {
		Activity: 1,
		Economy: 2,
		Task: 3,
		Guild: 4,
		Schedule: 5,
		Settings: 6,
		Efficency: 7,
		Progress: 8,
	}

	return (
		<Box sx={container}>

			<Box sx={CharacterPanel}>

				<Box sx={nameBox}>
					<Typography variant="Poppins36px" component="div" >{guild || "Liam Fenix Vortex"}</Typography>
				</Box>


				<Box sx={Outline}>
					<Avatar sx={AvatarStyles} />
				</Box>

				<Typography variant="Quicksand24px" component="div">{guild || "Rising Phoenix Legion"}</Typography>

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

			<Box sx={MenuPanelContainer}>

				<Box sx={buttonsContainer}>
					<SquareButton onClick={() => setShowPanel(options?.Activity)} icon={<DashboardOutlinedIcon />} text={'Activity'} />
					<SquareButton onClick={() => setShowPanel(options?.Economy)} icon={<PaymentsRoundedIcon />} text={'Economy'} />
					<SquareButton onClick={() => setShowPanel(options?.Task)} icon={<TaskOutlinedIcon />} text={'Task'} />
					<SquareButton onClick={() => setShowPanel(options?.Guild)} icon={<PeopleOutlineOutlinedIcon />} text={'Guild'} />
					<SquareButton onClick={() => setShowPanel(options?.Schedule)} icon={<EventAvailableOutlinedIcon />} text={'Schedule'} />
					<SquareButton onClick={() => setShowPanel(options?.Settings)} icon={<SettingsOutlinedIcon />} text={'Settings'} />
				</Box>

				<Typography variant="Poppins16left" sx={{ paddingLeft: "2vh", }} component="div" >Statistics</Typography>

				<Box sx={buttonsContainer_sm}>
					<SquareButton onClick={() => setShowPanel(options?.Efficency)} icon={<InsightsOutlinedIcon />} text={'Efficency'} />
					<SquareButton onClick={() => setShowPanel(options?.Progress)} icon={<DonutSmallOutlinedIcon />} text={'Progress'} />
				</Box>

			</Box>


			<Box sx={showPanel == options?.Activity ? { display: "flex" } : { display: "none" }}>

				<ActivityTable rows={[{ avatar: 'https://i.pravatar.cc/150?ana', action: 'New response', username: 'Leia Blaz', preview: 'They lean in, eager to learn...', timeAgo: '2 mins ago' }, { avatar: 'https://i.imgur.com/2AH91i1.jpg', action: 'You posted', username: 'Liam Vortex Khaler', preview: 'Admist the shadow of the...', timeAgo: '2 mins ago' }]} />
			</Box>


		</Box>
	)
}

export default Dashboard
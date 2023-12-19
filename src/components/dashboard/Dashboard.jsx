import { Avatar, Box, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
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
import UserStats from '../UiKit/UserStats';
import { useUserContext } from '../utils/userContext';
import { useDispatch, useSelector } from 'react-redux'
import getTimeDifferenceString from '../../utils/TimeAgo';
import { getLastActivitySelector } from '../../redux/selector/activitySelector';
import { getLastActivity } from '../../redux/actions/activityActions';

const Dashboard = ({ guild }) => {

	const [showPanel, setShowPanel] = useState(1)
	const { ID, username, email, profilePicture } = useUserContext()
	// console.log('showPanel', showPanel)

	const dispatch = useDispatch()



	const { getLastActivityState } = useSelector(getLastActivitySelector)


	const [info, setInfo] = useState([])
	// console.log(info)


	useEffect(() => {
		!getLastActivityState.length && dispatch(getLastActivity())

		if (getLastActivityState.length > 0) {
			const mapInfo = getLastActivityState?.map((item, index) => {
				return {
					ID: item.user_id,
					avatar: item?.avatar,
					action: item?.action_desc,
					username: item.name || 'unknown',
					preview: item.info,
					timeAgo: getTimeDifferenceString(item.createdAt),
					topics: "60 Topics"
				}
			})

			const filterInfo = mapInfo.filter((item) => ID == item.ID && item)
			// console.log(getLastActivityState)
			setInfo(filterInfo)
		}
	}, [getLastActivityState])

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
		<Box id="dashboardContainer" sx={container}>

			<Box id="CharacterPanel" sx={CharacterPanel}>

				<Box sx={nameBox}>
					<Typography variant="Poppins36px" component="div" >{username || "Liam Fenix Vortex"}</Typography>
				</Box>


				<Box sx={Outline}>
					<Avatar sx={AvatarStyles} src={profilePicture} />
				</Box>

				<Typography variant="GuildNameBig" component="div">{guild || "Rising Phoenix Legion"}</Typography>

				<UserStats stat={1.5} title={1} />

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

				<ActivityTable rows={info} />
			</Box>


		</Box>
	)
}

export default Dashboard
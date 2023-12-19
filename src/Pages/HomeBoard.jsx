
import React, { useEffect, useState } from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import { Box } from '@mui/material'
import FollowDash from '../components/FollowDash/FollowDash'
import ActivityTableBasic from '../components/UiKit/ActivityTableBasic'
import { useDispatch, useSelector } from 'react-redux'


import { getLastActivitySelector, getMostActiveUsersSelector } from '../redux/selector/activitySelector'
import { getLastActivity, getMostActiveUsers } from '../redux/actions/activityActions'
import getTimeDifferenceString from '../utils/TimeAgo'
import Home from './Home'


const HomeBoard = () => {
	const dispatch = useDispatch()



	const { getLastActivityState } = useSelector(getLastActivitySelector)
	const { getMostActiveUsersState } = useSelector(getMostActiveUsersSelector)


	const [infoLastActivity, setInfoLastActivity] = useState([])
	const [MostActiveUsers, setMostActiveUsers] = useState([])

	useEffect(() => {
		!getLastActivityState.length && dispatch(getLastActivity())
		!getMostActiveUsersState.length && dispatch(getMostActiveUsers())

		if (getLastActivityState.length > 0) {
			const newInfo = getLastActivityState?.map((item, index) => {
				return {
					ID: item.user_id,
					avatar: item.avatar,
					action: item.action_desc,
					username: item.name || 'unknown',
					preview: item.info,
					timeAgo: getTimeDifferenceString(item.createdAt),
					topics: "60 Topics"
				}

			})
			// console.log(getLastActivityState)
			setInfoLastActivity(newInfo)
		}
		try {
			if (getMostActiveUsersState.length > 0) {
				const newInfo = getMostActiveUsersState?.map((item, index) => {
					return {
						ID: item?.authorID,
						avatar: item.avatar,
						action: item.action_desc || 'unknown',
						username: item.username || 'unknown',
						preview: item.info || 'unknown',
						timeAgo: getTimeDifferenceString(item.createdAt),
						topics: item?.Cantidad > 1 ? `${item?.Cantidad} Posts` : `${item?.Cantidad} Posts`
					}

				})
				// console.log(getLastActivityState)
				setMostActiveUsers(newInfo)
			}
		} catch (error) {
			console.log(error)
		}

	}, [getLastActivityState, getMostActiveUsersState])

	return (
		<div>
			<Home ><Dashboard info={infoLastActivity} /></Home>
			<Box sx={{ display: 'flex' }}>
				<ActivityTableBasic rows={infoLastActivity} type={true} />
				<FollowDash rows={MostActiveUsers} desc={true} btnTitle="Follow" title={"Most Active Roleplayers"} max={8} />
			</Box>

		</div>

	)
}

export default HomeBoard